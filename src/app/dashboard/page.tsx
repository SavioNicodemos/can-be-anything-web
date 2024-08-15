import PageTitle from "@/components/layouts/PageTitle"
import Link from "next/link"

const Dashboard = () => {
  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      <Link className="btn btn-primary" href="/wishlist/create">
        Create a new wishlist
      </Link>
    </>
  )
}

export default Dashboard