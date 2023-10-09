import { NoGift } from '@/components/svgs/NoGift'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col flex-1 self-center justify-center items-center' >
      <NoGift width={600} height={600} className='fill-base-content -mt-24' />
      <h1 className='text-3xl font-bold uppercase' >No gifts for you!</h1>
      <h2>Seems like the page you&apos;re looking for not exist.</h2>
      <Link className='btn btn-primary mt-4' href="/">Return Home</Link>
    </div>
  )
}