import { Logo } from '@/components/svgs/Logo'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="p-3">
      <header className="navbar bg-base-300 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link href='/'>
                  Homepage
                </Link>
              </li>
              <li>
                <a target='_blank' href='https://github.com/SavioNicodemos'>
                  Know the author
                </a></li>
              <li>
                <a target='_blank' href='https://github.com/SavioNicodemos/can-be-anything-web'>
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl flex flex-col">
            Can Be
            Anything
          </a>
          <Logo height={40} width={40} />
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 mask mask-squircle">
                <Image
                  alt="Avatar"
                  height={70}
                  width={70}
                  src="http://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;