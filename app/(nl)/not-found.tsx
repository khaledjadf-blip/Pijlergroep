/** 404 for every unknown URL (see [...notFound]/page.tsx). */
export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center pt-[120px] pb-20">
      <div className="wrap max-w-[760px]">
        <div className="section-label">404</div>
        <h1
          className="display mb-5"
          style={{ fontSize: "clamp(30px, 4.5vw, 52px)", lineHeight: 1.1 }}
        >
          Deze pagina bestaat niet.
        </h1>
        <p className="text-paper-dim text-[17px] mb-10 leading-[1.7]">
          De pagina is verplaatst of het adres klopt niet.
          <br />
          <span lang="ar" dir="rtl">
            هذه الصفحة غير موجودة.
          </span>
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a href="/" className="btn btn-primary">
            Naar de homepage <span className="arrow">→</span>
          </a>
          <a href="/ar" lang="ar" className="btn btn-ghost">
            الصفحة الرئيسية
          </a>
        </div>
      </div>
    </section>
  );
}
