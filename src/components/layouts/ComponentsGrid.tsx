import React from 'react'

type Props = {
  children: React.ReactNode
};

const ComponentsGrid = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-4 gap-y-4 w-full">
      {children}
    </div>
  )
}

export default ComponentsGrid