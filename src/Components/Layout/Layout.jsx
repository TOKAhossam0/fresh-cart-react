//**************************************layout start***********************************8 */

import React, { useState } from 'react'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.jsx'
export default function Layout() {




  return <>
    <Navbar />
    <div className="container mx-auto md:pt-11">

      <Outlet></Outlet>
    </div>
    <Footer />
  </>
}
//**************************************layout end***********************************8 */