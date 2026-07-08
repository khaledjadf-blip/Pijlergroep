"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { brandColorMap } from "@/data/site";

type OrbitConfig = {
  radius: number;
  tiltX: number;
  tiltZ: number;
  speed: number;
  phase: number;
  color: number;
};

/**
 * Nucleus with 3 wireframe shapes orbiting on tilted paths.
 * One shape per subsidiary, colored to match brand tokens.
 */
export function AtomScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.9, 11);
    camera.lookAt(0, 0, 0);

    const disposables: Array<{ dispose: () => void }> = [];
    const track = <T extends { dispose: () => void }>(x: T): T => {
      disposables.push(x);
      return x;
    };

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const aspect = w / h;
      camera.position.z = aspect < 1 ? 12.5 : 11;
    };

    const group = new THREE.Group();
    scene.add(group);

    // Nucleus wireframe icosahedron
    const nucleusGeo = track(new THREE.IcosahedronGeometry(0.5, 1));
    const nucleusMat = track(
      new THREE.MeshBasicMaterial({
        color: 0xf2f0ec,
        wireframe: true,
        transparent: true,
        opacity: 0.5,
      }),
    );
    const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
    group.add(nucleus);

    // Inner glow sphere
    const innerGeo = track(new THREE.SphereGeometry(0.36, 24, 24));
    const innerMat = track(
      new THREE.MeshBasicMaterial({
        color: 0xf2f0ec,
        transparent: true,
        opacity: 0.12,
      }),
    );
    const innerGlow = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerGlow);

    // Subtle halo ring
    const haloGeo = track(new THREE.RingGeometry(0.75, 0.77, 64));
    const haloMat = track(
      new THREE.MeshBasicMaterial({
        color: 0xf2f0ec,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide,
      }),
    );
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.rotation.x = Math.PI / 2;
    group.add(halo);

    // Orbit ellipse lines
    function makeOrbit(radius: number, tiltX: number, tiltZ: number, color: number) {
      const pts: THREE.Vector3[] = [];
      const seg = 128;
      for (let i = 0; i <= seg; i++) {
        const a = (i / seg) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
      }
      const geo = track(new THREE.BufferGeometry().setFromPoints(pts));
      const mat = track(
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.28 }),
      );
      const line = new THREE.Line(geo, mat);
      line.rotation.x = tiltX;
      line.rotation.z = tiltZ;
      return line;
    }

    const hex = (color: string) => parseInt(color.replace("#", ""), 16);

    const orbitConfigs: OrbitConfig[] = [
      { radius: 1.85, tiltX: 0.45, tiltZ: 0.15, speed: 0.85, phase: 0, color: hex(brandColorMap.red) },
      { radius: 2.25, tiltX: -0.55, tiltZ: 0.55, speed: 0.6, phase: Math.PI * 0.7, color: hex(brandColorMap.gold) },
      { radius: 2.6, tiltX: 0.2, tiltZ: -0.65, speed: 0.45, phase: Math.PI * 1.4, color: hex(brandColorMap.teal) },
    ];

    orbitConfigs.forEach((o) => {
      group.add(makeOrbit(o.radius, o.tiltX, o.tiltZ, o.color));
    });

    // Line-drawn orbiting shapes
    function makeLineShape(geo: THREE.BufferGeometry, color: number) {
      const edges = track(new THREE.EdgesGeometry(geo));
      const mat = track(
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.95 }),
      );
      geo.dispose();
      return new THREE.LineSegments(edges, mat);
    }

    const shapes: THREE.LineSegments[] = [
      makeLineShape(new THREE.ConeGeometry(0.26, 0.6, 8), orbitConfigs[0].color),
      makeLineShape(new THREE.OctahedronGeometry(0.32, 0), orbitConfigs[1].color),
      makeLineShape(new THREE.BoxGeometry(0.42, 0.42, 0.42), orbitConfigs[2].color),
    ];
    shapes.forEach((s) => group.add(s));

    // Small solid center dots inside each shape
    const dots = shapes.map((_, i) => {
      const dotGeo = track(new THREE.SphereGeometry(0.05, 12, 12));
      const dotMat = track(new THREE.MeshBasicMaterial({ color: orbitConfigs[i].color }));
      const dot = new THREE.Mesh(dotGeo, dotMat);
      group.add(dot);
      return dot;
    });

    // Point trails behind each orbiter
    const trailLen = 18;
    const trails = shapes.map((_, i) => {
      const positions = new Float32Array(trailLen * 3);
      const geo = track(new THREE.BufferGeometry());
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const mat = track(
        new THREE.PointsMaterial({
          color: orbitConfigs[i].color,
          size: 0.06,
          transparent: true,
          opacity: 0.4,
          sizeAttenuation: true,
        }),
      );
      const pts = new THREE.Points(geo, mat);
      group.add(pts);
      return { geo, positions };
    });

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseX = (e.clientX - r.left) / r.width - 0.5;
      mouseY = (e.clientY - r.top) / r.height - 0.5;
    };
    const handleMouseLeave = () => {
      mouseX = 0;
      mouseY = 0;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);
    resize();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let t = 0;
    let rafId = 0;
    let mounted = true;

    function tick() {
      if (!mounted) return;
      t += 0.008;
      targetRotY += (mouseX * 0.3 - targetRotY) * 0.05;
      targetRotX += (-mouseY * 0.2 - targetRotX) * 0.05;
      group.rotation.y = t * 0.12 + targetRotY;
      group.rotation.x = targetRotX;

      const s = 1 + Math.sin(t * 2) * 0.05;
      nucleus.scale.set(s, s, s);
      (innerGlow.material as THREE.MeshBasicMaterial).opacity =
        0.12 + Math.sin(t * 2) * 0.04;

      orbitConfigs.forEach((o, i) => {
        const a = t * o.speed + o.phase;
        const x0 = Math.cos(a) * o.radius;
        const z0 = Math.sin(a) * o.radius;
        const cosX = Math.cos(o.tiltX);
        const sinX = Math.sin(o.tiltX);
        const y1 = -z0 * sinX;
        const z1 = z0 * cosX;
        const cosZ = Math.cos(o.tiltZ);
        const sinZ = Math.sin(o.tiltZ);
        const x2 = x0 * cosZ - y1 * sinZ;
        const y2 = x0 * sinZ + y1 * cosZ;

        shapes[i].position.set(x2, y2, z1);
        shapes[i].rotation.x += 0.012;
        shapes[i].rotation.y += 0.018;
        dots[i].position.set(x2, y2, z1);

        const trail = trails[i];
        for (let j = trailLen - 1; j > 0; j--) {
          trail.positions[j * 3] = trail.positions[(j - 1) * 3];
          trail.positions[j * 3 + 1] = trail.positions[(j - 1) * 3 + 1];
          trail.positions[j * 3 + 2] = trail.positions[(j - 1) * 3 + 2];
        }
        trail.positions[0] = x2;
        trail.positions[1] = y2;
        trail.positions[2] = z1;
        trail.geo.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
      if (!reduceMotion) rafId = requestAnimationFrame(tick);
    }

    if (reduceMotion) renderer.render(scene, camera);
    else rafId = requestAnimationFrame(tick);

    return () => {
      mounted = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="w-full h-[520px] max-h-[60vh] relative z-[1] max-[960px]:h-[340px] max-[960px]:max-h-[44vh] max-[960px]:-order-1 max-[640px]:h-[280px]"
      style={{
        filter: "drop-shadow(0 20px 60px rgba(212,25,27,0.15))",
      }}
    />
  );
}
