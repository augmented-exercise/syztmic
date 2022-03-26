import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import {
  loginContainer,
  login,
  registerContainer,
  registerText,
  model,
  phrases,
  emph,
  navbar,
  navItem,
  navbarList,
  logo,
  navItemSelected,
  selectedCircle,
} from  "./layout.module.scss"

const NavItem = ({page, selected, updatePage} : {
  page : string; 
  selected : string; 
  updatePage : any;
  }
  ) => {
  if (page==selected){
    return (
      <li>
        <div className={navItemSelected}>{page}</div>
        <div className={selectedCircle}></div>
      </li>
    )
  }
  else {
    return (<li onClick={()=>updatePage(page)}><div className={navItem}>{page}</div></li>)
  }
}

const Navbar = ({page, updatePage} : {page : string; updatePage : any}) => {
  return (
    <div id={navbar}>
      <ul className={navbarList}>
        <NavItem page="Home" selected={page} updatePage={updatePage}></NavItem>
        <NavItem page="About" selected={page} updatePage={updatePage}></NavItem>
        <NavItem page="Contact" selected={page} updatePage={updatePage}></NavItem>
      </ul>
    </div>
  )
}

const Layout = (props : any) => {
  return (
    <main>
      <div> {/* Page header*/}
        <div id={logo}>
          <StaticImage 
          src="../images/logo.png"
          alt="logo"
          style={{
              width: 100,
              margin: 5,
          }}
          ></StaticImage>
        </div>
        <div id={loginContainer}>
            <a id={login}>Log in</a>
            <a>
              <div id={registerContainer}>
                <p id={registerText}>Register</p>
              </div>
            </a>
        </div>
        <Navbar page={props.page} updatePage={props.updatePage}></Navbar>
      </div>
      {props.children}
    </main>
  )
}

export default Layout;
