import "./Navbar.css";
import { useEffect, useState } from "react";
import { supabase } from "../supabase"; // Import your supabase client
import { FiLogOut } from "react-icons/fi";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    checkUser();
    setupAuthListener();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      fetchUserProfile(user.id);
    }
    setIsLoggedIn(!!user);
  };

  const setupAuthListener = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        fetchUserProfile(session.user.id);
        setIsLoggedIn(true);
      } else if (event === "SIGNED_OUT") {
        setIsLoggedIn(false);
        setUserProfile(null);
      }
    });
  };

  const fetchUserProfile = async (userId) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (!error) setUserProfile(data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white Nav-uwc">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-0 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block" href="/">
                <span className="sr-only">Home</span>
                <img
                  className="h-12 w-12"
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
                      href="/"
                    >
                      Home
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
                      href="contactus"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/FAQ"
                    >
                      FAQ
                    </a>
                  </li>

                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  {isLoggedIn ? (
                    <div className="flex items-center gap-4">
                      <span className="text-teal-600 font-medium">
                        {userProfile?.name || "User"}
                      </span>
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
                      >
                        <FiLogOut className="w-5 h-5" />
                        <span className="hidden sm:inline">Logout</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      <a
                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                        href="/signup"
                      >
                        Register
                      </a>
                      <div className="hidden sm:flex">
                        <a
                          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                          href="/login"
                        >
                          Login
                        </a>
                      </div>
                    </>
                  )}
                </div>

                <div className="block md:hidden">
                  <button
                    className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    onClick={() => setMenuOpen(!menuOpen)}
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
            className={`md:hidden ${menuOpen ? "block" : "hidden"}`}
            aria-label="Mobile Global"
          >
            <ul className="flex flex-col items-center gap-4 text-sm mt-4">

              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/"
                >
                  Home
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
                  href="/contactus"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/FAQ"
                >
                  FAQ
                </a>
              </li>
              {isLoggedIn && (
                <li className="w-full text-center">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-teal-600 font-medium">
                      {userProfile?.name || "User"}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
                    >
                      <FiLogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </div>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;