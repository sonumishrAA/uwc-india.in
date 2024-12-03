import "./Navbar.css";
function Navbar() {
  return (
    <>
      <header className="bg-white Nav-uwc">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block" href="/home">
                <span className="sr-only">Home</span>
                <img
                  className="h-8"
                  src="https://i.ibb.co/gvWCc4j/blacklogo.png"
                  alt="Logo"
                />
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm ul-uwc">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/home"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/cdf"
                    >
                      Client
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/workers"
                    >
                      Workers
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="aboutus"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/contus"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                    href="#"
                  >
                    Login
                  </a>
                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                      href="/signup"
                    >
                      Register
                    </a>
                  </div>
                </div>

                <div className="block md:hidden">
                  <button
                    id="menu-button"
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={() =>
                      document
                        .getElementById("mobile-menu")
                        .classList.toggle("hidden")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <nav
            id="mobile-menu"
            className="hidden md:hidden"
            aria-label="Mobile Global"
          >
            <ul className="flex flex-col items-center gap-4 text-sm mt-4">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/cdf"
                >
                  Client
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/workers"
                >
                  Workers
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="aboutus"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="contus"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;
