import React from "react"
import styles from "./footer.module.css"

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
    <footer className={styles.footer}>

      {/* BENEFICIOS */}
      {benefits.length > 0 && (
        <div className={styles.benefits}>
          {benefits.map((item, i) => (
            <div key={i} className={styles.benefitItem}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}

      {/* LÍNEA DIVISORA */}
      <div className={styles.divider} />

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.container}>
        <div className={styles.columns}>

          {/* COLUMNAS DE LINKS */}
          {columns.map((col, i) => (
            <div key={i} className={styles.column}>
              <h4 className={styles.columnTitle}>{col.title}</h4>
              <ul className={styles.linkList}>
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* REDES SOCIALES */}
          {socials.length > 0 && (
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Follow Us</h4>
              <div className={styles.socials}>
                {socials.map((s, i) => (
                  <a key={i} href={s.href} className={styles.socialLink}>
                    <img src={s.icon} alt={`social-${i}`} width={24} height={24} />
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