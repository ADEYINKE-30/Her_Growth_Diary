import type { CSSProperties, PropsWithChildren } from 'react'

interface SectionContainerProps extends PropsWithChildren {
  className?: string
  style?: CSSProperties
}

export default function SectionContainer({ children, className, style }: SectionContainerProps) {
  return (
    <div className={className} style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', ...style }}>
      {children}
    </div>
  )
}
