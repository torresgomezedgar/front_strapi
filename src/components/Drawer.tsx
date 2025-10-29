import { useState } from "react"

import Header from "./header/Header"
import Menu from "./menu/Menu"

import Content from "./content/Content"

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
          {/* <Top_header />        */}
          <Header />
          {/* Page content here */}
          <div className="p-8 max-w-5xl mx-auto">
            <Content />
          </div>
          
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className={`menu bg-base-200 min-h-full w-80 p-4 ${padding ? "pt-20" : "pt-30" }`}>
            {/* Sidebar content here */}
            <Menu/>
          </div>
        </div>

      </div>
      {/*<Footer /> */}
    </>
  )
}

export default Drawer