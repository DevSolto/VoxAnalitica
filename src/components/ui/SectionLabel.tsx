interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`text-xs font-semibold tracking-widest uppercase text-brand-amber ${className}`}
    >
      {children}
    </span>
  )
}
