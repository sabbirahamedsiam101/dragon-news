import { Link } from "react-router-dom"
import user from '../../assets/user.png'

export default function Navber() {
  const links = <>
    <Link to={"/"}>
      Home
    </Link>
    <Link to={"/about"}>
      About
    </Link>
    <Link to={"/carrer"}>
      Carrer
    </Link>
  </>
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {
              links
            }
          </ul>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex gap-[2vw] menu-horizontal px-1">
          {
            links
          }
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <div className="avatar">
          <div className="w-[3vw] rounded-full">
            <img src={user} />
          </div>
        </div>
        <Link to={"/login"}>
          <a className="btn btn-sm">Login</a>
        </Link>
      </div>
    </div>
  )
}
