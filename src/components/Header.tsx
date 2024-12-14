import { Link } from 'react-router-dom'

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About Me"
  }
]

export default function Header() {
  return (
    <header>
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <Image
              src={Logo}
              alt="Logo"
              className="object-cover cursor-pointer"
              width={55}
              height={55}
              priority
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Todo App</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="text-white bg-yellow-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <a target="_blank" href={'https://jsonplaceholder.typicode.com/'}>
              JSON APIs
            </a>
            </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map((link) => (
                <li key={link.href}>
                <Link
                    className={`${`block py-2 px-3 text-white text-zinc-900 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500`}`}
                    to={link.href}
                >
                    {link.label}
                </Link>
                </li>
            ))}
            </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}