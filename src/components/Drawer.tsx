import Header from "./header/Header.tsx"
import Sidebar from "./header/Sidebar.tsx"

import Content from "./Content.tsx"

function Drawer() {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Header />
          {/* Page content here */}
          <div className="p-8 max-w-5xl mx-auto">
            <Content />
          </div>
          
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4 pt-20">
            {/* Sidebar content here */}
            <Sidebar />
          </ul>
        </div>

      </div>
      {/*<Footer /> */}
    </>
  )
}

export default Drawer