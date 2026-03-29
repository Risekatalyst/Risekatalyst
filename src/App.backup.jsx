export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "radial-gradient(circle at top left, rgba(130,230,20,0.18), transparent 24%), linear-gradient(180deg, #fbfff8 0%, #f4fbe8 100%)",
        padding: "24px",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "720px",
          background: "rgba(255,255,255,0.9)",
          border: "1px solid rgba(90,160,0,0.12)",
          borderRadius: "28px",
          padding: "32px",
          boxShadow: "0 18px 34px rgba(96,178,0,0.08)",
          textAlign: "center",
        }}
      >
        <img
          src="/logo-mark.png"
          alt="Katalyst Rise"
          style={{
            width: "88px",
            height: "88px",
            objectFit: "contain",
            margin: "0 auto 18px",
            display: "block",
          }}
        />

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 6vw, 3.5rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "#173500",
          }}
        >
          We’ll be back soon
        </h1>

        <p
          style={{
            margin: "18px auto 0",
            maxWidth: "520px",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "rgba(22,49,0,0.72)",
          }}
        >
          Katalyst Rise is currently under scheduled maintenance.
          We are making improvements and will be live again shortly.
        </p>

        <div
          style={{
            marginTop: "24px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "999px",
            padding: "12px 18px",
            background: "linear-gradient(135deg, #ffffff 0%, #e7ffd4 56%, #89df18 100%)",
            color: "#173500",
            fontWeight: 700,
          }}
        >
          Maintenance Mode
        </div>

        <p
          style={{
            marginTop: "22px",
            marginBottom: 0,
            fontSize: "0.95rem",
            color: "rgba(22,49,0,0.58)",
          }}
        >
          For urgent queries: partnerships@risekatalyst.com
        </p>
      </section>
    </main>
  );
}
