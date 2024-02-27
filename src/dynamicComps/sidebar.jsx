import React, { useState, useEffect } from "react";

export const SideBarType1 = (props) => {
  const { links, logo, position } = props;
  const [showButton, setShowButton] = useState(true);

  return (
    <div className="SideBar ">
      <button
        className={`fixed md:hidden top-6 ${position}-0 ml-3 p-4 z-10`}
        onClick={() => setShowButton(!showButton)}
      >
        <span className="block w-6 h-1 bg-yellow-300 mb-1"></span>
        <span className="block w-6 h-1 bg-yellow-300 mb-1"></span>
        <span className="block w-6 h-1 bg-yellow-300"></span>
      </button>

      {showButton && (
        <aside
          id="logo-sidebar"
          className={`fixed top-0 ${position}-0 z-5 w-64 h-screen transition-transform -translate-x-full translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-screen pt-40 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <a
              href="/"
              className="flex justify-center space-x-3 rtl:space-x-reverse"
            >
              {logo && (
                <span className="flex items-center text-2xl font-semibold whitespace-nowrap dark:text-black">
                  LOGO
                </span>
              )}
            </a>
            {links && (
              <ul className="space-y-2 font-medium">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Contact Us
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">About</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      Location
                    </span>
                  </a>
                </li>
              </ul>
            )}
          </div>
        </aside>
      )}
    </div>
  );
};

export const SideBarType2 = (props) => {
  const { links, logo, position } = props;
  const [showButton, setShowButton] = useState(true);

  return (
    <div className="SideBar ">
      <button
        className={`fixed md:hidden top-6 ${position}-0 ml-3 p-4 z-10`}
        onClick={() => setShowButton(!showButton)}
      >
        <span className="block w-6 h-1 bg-yellow-300 mb-1"></span>
        <span className="block w-6 h-1 bg-yellow-300 mb-1"></span>
        <span className="block w-6 h-1 bg-yellow-300"></span>
      </button>

      {showButton && (
        <aside
          id="logo-sidebar"
          className={`fixed top-0 ${position}-0 z-5 w-64 h-screen transition-transform -translate-x-full translate-x-0`}
          aria-label="Sidebar"
        ></aside>
      )}
			
    </div>
  );
};
