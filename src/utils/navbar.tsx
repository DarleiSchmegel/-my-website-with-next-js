import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import imgDarlei from "../assets/darlei.png"

const Navbar: React.FC = () => {
  const [menuSelected, setMenuSelected] = useState("home");

  function handleClick(menuClicked) {
    document.getElementById(menuSelected).classList.remove("active")

    setMenuSelected(menuClicked)
    document.getElementById(menuClicked).classList.add("active")

    var windowWidth = window.innerWidth;
    var status = document.getElementById("check") as HTMLInputElement;
    if (status.checked && windowWidth<=500) {
      status.checked = false
    }
  }
  return (
    <>
      <input type="checkbox" id="check"/>
      <label htmlFor="check">
        <FontAwesomeIcon icon="bars"  id="btn" />
        <FontAwesomeIcon icon="times"  id="cancel" />
      </label>

      <div id="sidebar">
        <header>
          <img src={imgDarlei} alt=""/>
          <h3>
            Darlei M. Schmegel
          </h3>
        </header>
        <ul>
          <li onClick={()=>{handleClick("home")}} id="home" className="active">
            <Link href="/" >
              <a><FontAwesomeIcon icon="qrcode" id="icons"/>Home</a>
            </Link>
          </li>
          <li onClick={()=>{handleClick("services")}} id="services">
            <Link href="/services" >
              <a><FontAwesomeIcon icon="sliders-h" id="icons"/>Services</a>
            </Link>
          </li>
          <li onClick={()=>{handleClick("portifolio")}} id="portifolio">
            <Link href="/portifolio" >
              <a><FontAwesomeIcon icon="folder-open" id="icons"/>Portifólio</a>
            </Link>
          </li>
          <li onClick={()=>{handleClick("about")}} id="about">
            <Link href="/about" >
              <a><FontAwesomeIcon icon="address-card" id="icons"/>About me</a>
            </Link>
          </li>
          <li onClick={()=>{handleClick("contact")}} id="contact">
            <Link href="/contact" >
              <a><FontAwesomeIcon icon="paper-plane" id="icons"/>Contact me</a>
            </Link>
          </li>
          <li onClick={()=>{handleClick("blog")}} id="blog">
            <Link href="/blog" >
              <a><FontAwesomeIcon icon="blog" id="icons"/>Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Navbar
