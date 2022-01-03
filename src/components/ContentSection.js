export const ContentSection = ({ children, id = '', className = '' }) => {
  return (
    <section id={id} className={`py-5 ${className}`}>
      {children}
    </section>
  )
}
