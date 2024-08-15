import { PropsWithChildren } from 'react'

const Card = ({ children, className }: PropsWithChildren & { className: string }) => {
  return (
    <div className={`card w-96 bg-neutral text-neutral-content ${className}`}>
      {children}
    </div>
  )
}

export default Card