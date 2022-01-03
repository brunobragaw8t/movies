export const ContentSection = ({ children, className = '' }) => {
  return (
    <section className={`py-5 ${className}`}>
      {children}
    </section>
  )
}
