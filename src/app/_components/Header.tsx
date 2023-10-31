import { Logo } from '@/components/svgs/Logo';
import { authOptions } from '@/providers/auth/authOptions';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import UserDropdown from './UserDropdown';

const Header = async () => {
  const session = await getServerSession(authOptions);
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
          <Link href='/' className="btn btn-ghost normal-case text-xl flex flex-col">
            Can Be Anything
          </Link>
          <Logo height={40} width={40} />
        </div>

        <div className="navbar-end">
          {session?.user?.name
            ? <UserDropdown image={session.user?.image || null} />
            : <Link className='mx-4' href='/api/auth/signin'>Login</Link>
          }
        </div>
      </header>
    </div>
  )
}

export default Header;