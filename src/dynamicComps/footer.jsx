import React from "react";

export const FooterType1 = (props) => {
  const { companyName, links, logo } = props;
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0">
        <footer className="bg-white rounded-lg shadow">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
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
              {links && (
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                  <li>
                    <a
                      href="/about-us"
                      className="hover:underline me-4 md:me-6"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="hover:underline me-4 md:me-6"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/t&c" className="hover:underline me-4 md:me-6">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center">
              © 2024{" "}
              <a href="/" className="hover:underline">
                CompanyName™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};
export const FooterType2 = (props) => {
  const { companyName, links, logo } = props;
  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0">
        <footer className="bg-white rounded-lg shadow">
          <div className="flex justify-center mx-auto max-w-screen-xl p-4">
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
          </div>
        </footer>
      </div>
    </div>
  );
};
export const FooterType3 = (props) => {
  const { companyName, links, logo } = props;

  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0">
        <footer className="bg-white rounded-lg shadow">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              {links && (
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                  <li>
                    <a
                      href="/about-us"
                      className="hover:underline me-4 md:me-6"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="hover:underline me-4 md:me-6"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/t&c" className="hover:underline me-4 md:me-6">
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="hover:underline">
                      Contact
                    </a>
                  </li>
                </ul>
              )}
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
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center">
              © 2024{" "}
              <a href="/" className="hover:underline">
                CompanyName™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
