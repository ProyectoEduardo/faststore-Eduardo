import React from "react"

type Link = {
  label: string
  href: string
}

type Column = {
  title: string
  links: Link[]
}

type Social = {
  icon: string
  href: string
}

type FooterProps = {
  benefits?: string[]
  columns?: Column[]
  socials?: Social[]
}

export default function CustomFooter({
  benefits = [],
  columns = [],
  socials = [],
}: FooterProps) {
  return (
    <footer style={{
      width: "100%",
      backgroundColor: "#1a1a1a",
      color: "#ffffff",
      fontFamily: "sans-serif",
    }}>

      {/* BENEFICIOS */}
      {benefits.length > 0 && (
        <div style={{
          display: "flex",
          flexWrap: "wrap" as const,
          justifyContent: "center",
          gap: "1rem",
          padding: "1rem 2rem",
          backgroundColor: "#111111",
        }}>
          {benefits.map((item, i) => (
            <div key={i} style={{ fontSize: "0.875rem", color: "#cccccc", whiteSpace: "nowrap" }}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* LÍNEA DIVISORA */}
      <div style={{ height: "1px", backgroundColor: "#333333" }} />

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2.5rem 2rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "2rem",
        }}>

          {/* COLUMNAS DE LINKS */}
          {columns.map((col, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
              <h4 style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                color: "#ffffff",
                margin: "0 0 0.5rem",
              }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" as const, gap: "0.5rem" }}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      style={{ fontSize: "0.875rem", color: "#aaaaaa", textDecoration: "none" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#aaaaaa")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* REDES SOCIALES */}
          {socials.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
              <h4 style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                textTransform: "uppercase" as const,
                letterSpacing: "0.08em",
                color: "#ffffff",
                margin: "0 0 0.5rem",
              }}>
                Follow Us
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.75rem", alignItems: "center" }}>
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#2a2a2a",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#444444")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#2a2a2a")}
                  >
                    <img
                      src={s.icon}
                      alt={`social-${i}`}
                      width={20}
                      height={20}
                      style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

    </footer>
  )
}