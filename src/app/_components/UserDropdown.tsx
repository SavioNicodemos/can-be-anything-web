import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string | null;
}

const UserDropdown = ({ image }: Props) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 mask mask-squircle">
          <Image
            alt="Avatar"
            height={70}
            width={70}
            src={image || "http://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
          />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href='/api/auth/signout'>Logout</Link></li>
      </ul>
    </div>
  )
}

export default UserDropdown;