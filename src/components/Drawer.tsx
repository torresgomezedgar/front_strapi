import Header from "./header/Header"
import Sidebar from "./sidebar/Sidebar"

import Content from "./content/Content"
import Top_header from "./header/Top_header"
import { useState } from "react"

function Drawer() {
  
  // Controlar el padding superior del sidebar al hacer scroll
  const [padding, setPadding] = useState(false)
  const ctlTop = () => {if (window.scrollY > 0) setPadding(true)}

  console.log("padding ", padding)
  
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" onClick={ctlTop} className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <Top_header />
          <Header />
          {/* Page content here */}
          <div className="p-8 max-w-5xl mx-auto">
            <Content />
          </div>
          
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className={`menu bg-base-200 min-h-full w-80 p-4 ${padding ? "pt-20" : "pt-30" }`}>
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