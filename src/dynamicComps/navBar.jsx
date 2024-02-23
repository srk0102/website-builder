//components
import { SearchBar } from "../components";

export const NavBarType1 = (props) => {
  const { searchBar, companyName, links, logo } = props;
  return (
    <div>
      <div className="fixed top-0 left-0 right-0">
        <nav className="bg-white border-gray-200 dark:bg-amber-400">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {logo && (
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                  LOGO
                </span>
              )}
              {companyName && (
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                  Name
                </span>
              )}
            </a>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              {links && (
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-amber-400 dark:border-gray-700">
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              )}
              {searchBar && <SearchBar />}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export const NavBarType2 = (props) => {
  const { searchBar, companyName, links, logo } = props;

  return (
    <div>
      <div className="fixed top-0 left-0 right-0">
        <nav className="bg-white flex content-center border-gray-200 dark:bg-amber-400">
          <div className="flex justify-items-center mx-auto max-w-screen-xl p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              {logo && (
                <span className="flex items-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                  Logo
                </span>
              )}
              {companyName && (
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                  Name
                </span>
              )}
            </a>
          </div>
        </nav>
        <nav className="flex content-center bg-gray-50 dark:bg-amber-400">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center">
              {links && (
                <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-black hover:underline"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-black hover:underline"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-black hover:underline"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-900 dark:text-black hover:underline"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              )}
              {searchBar && <SearchBar />}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
