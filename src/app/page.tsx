import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-3">
      <Link href="/user/nicodemos">
        Go to my profile
      </Link>
    </main>
  )
}
