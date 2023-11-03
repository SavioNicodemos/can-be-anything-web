import NextLink from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
};

const StyledLink = ({ href, children }: Props) => {
  return (
    <NextLink href={href} className='link'>
      {children}
    </NextLink>
  )
}

export default StyledLink