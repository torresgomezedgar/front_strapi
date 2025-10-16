import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'


function App() {

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 sticky top-0 z-50">
            <div className="flex-1 lg:hidden">
              <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li><a>Navbar Item 1</a></li>
                <li><a>Navbar Item 2</a></li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Hero />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4 pt-20">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
        
      </div>
      {/*<Footer /> */}
    </>
  )
}

export default App
