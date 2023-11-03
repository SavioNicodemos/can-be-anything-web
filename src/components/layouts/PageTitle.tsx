import React from 'react'

type Props = {
  children: React.ReactNode
}

const PageTitle = ({ children }: Props) => {
  return (
    <h1 className="text-2xl pt-2 pb-2 font-bold">
      {children}
    </h1>
  )
}

export default PageTitle