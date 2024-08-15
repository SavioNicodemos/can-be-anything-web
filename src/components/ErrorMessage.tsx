import { PropsWithChildren } from 'react'

const ErrorMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null

  return (
    <p className='text-lg text-red-400'>{children}</p>
  )
}

export default ErrorMessage