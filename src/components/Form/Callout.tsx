'use client'

import { PropsWithChildren, createContext, useContext } from 'react';

type Color = 'red' | 'blue';
type Props = {
  children?: React.ReactNode;
  color: Color;
};

const ColorContext = createContext<Color>('red');

const Root = ({ children, color }: Props) => {
  const colors = {
    red: 'bg-rose-950',
    blue: 'bg-blue-950',
  };

  return (
    <ColorContext.Provider value={color}>
      <div className={`p-4 rounded-lg ${colors[color]}`}>
        {children}
      </div>
    </ColorContext.Provider>
  )
}

const Text = ({ children }: PropsWithChildren) => {
  const color = useContext(ColorContext);

  const colors = {
    red: 'text-red-300',
    blue: 'text-blue-300'
  };

  return (
    <p className={`${colors[color]}`}>{children}</p>
  )
}

const Callout = { Root, Text }

export default Callout;