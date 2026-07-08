import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = {
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function TrafficConeIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      {...base}
      {...props}
    >
      <path d="M12 3l5 16H7l5-16z" />
      <path d="M6 19h12" />
      <path d="M9 12h6" />
    </svg>
  );
}

export function HardHatIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      {...base}
      {...props}
    >
      <path d="M4 17c0-4.5 3.5-8 8-8s8 3.5 8 8" />
      <path d="M3 17h18" />
      <path d="M12 9V5" />
      <path d="M10 5h4" />
    </svg>
  );
}

export function SparkleIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      {...base}
      {...props}
    >
      <path d="M15 4l5 5" />
      <path d="M14 5l-8 8 5 5 8-8" />
      <path d="M11 18l-3 3-5-5 3-3" />
      <path d="M6 16l2 2" />
    </svg>
  );
}

export function ShieldCheckIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      {...base}
      {...props}
    >
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ConnectIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      {...base}
      {...props}
    >
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.5 6.5l2.5 2.5M15 15l2.5 2.5M6.5 17.5l2.5-2.5M15 9l2.5-2.5" />
    </svg>
  );
}
