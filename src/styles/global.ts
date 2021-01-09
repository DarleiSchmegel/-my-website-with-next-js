import { createGlobalStyle } from "styled-components";

import img from '../assets/Linguagem-de-programação.jpg'
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }
    body {
        background: ${props => props.theme.colors.background};
        /* background: url(${img}) no-repeat ; */
        /* background-repeat: no-repeat; */
        color: #e1e1e6;
        font: 400 16px Roboto, sans-serif;
    }

    // HEADER NAVBAR
    #sidebar {
      position: fixed;
      left: -250px;
      width: 250px;
      height: 100%;
      background: #042331;
      transition: all .5s ease;
    }
    #sidebar header {
      font-size: 22px;
      color: white;
      /* line-height: 10px; */
      text-align: center;
      background: #063146;
      user-select: none;
    }
    #sidebar header img {
      padding-top: 12px;
      border-radius: 50%;
    }
    #sidebar header h3{
      padding: 8px 30px;
      line-height: 1;

    }
    #sidebar ul a{
      display: block;
      height: 100%;
      width: 100%;
      line-height: 65px;
      font-size: 20px;
      color: white;
      padding-left: 40px;
      box-sizing: border-box;
      border-bottom: 1px solid black;
      border-top: 1px solid rgba(255,255,255,.1);
      border-left: 6px solid rgba(255,255,255,.1);
      transition: .4s;
    }
    ul li {
      transition: .4s;
    }
    ul li:hover {
      padding-left: 30px;
    }
    #sidebar ul a #icons{
      margin-right: 16px;
    }
    ul .active {
      /* border-left: 8px solid rgba(255,255,255,.1); */
      padding-left: 30px;
    }

    #check{
      display: none;
    }
    label #btn,label #cancel{
      position: absolute;
      background: #042331;
      border-radius: 3px;
      cursor: pointer;
    }
    label #btn{
      left: 40px;
      top: 25px;
      font-size: 55px;

      color: white;
      padding: 6px 12px;
      transition: all .5s;
    }
    label #cancel{
      z-index: 1111;
      left: -195px;
      top: 10px;
      font-size: 50px;
      color: #0a5275;
      padding: 4px 9px;
      transition: all .5s ease;
    }
    #check:checked ~ #sidebar{
      left: 0;
    }
    #check:checked ~ label #btn{
      left: 250px;
      opacity: 0;
      pointer-events: none;
    }
    #check:checked ~ label #cancel{
      left: 195px;
    }
    #check:checked ~ section{
      margin-left: 250px;
    }
    section{
      /* background: url(bg.jpeg) no-repeat; */
      background-position: center;
      background-size: cover;
      height: 100vh;
      transition: all .5s;
    }
    @media (max-width: 600px){
      #check:checked ~ section{
        margin-left: 0px;
      }
      /* .sidebarMidea{
        left: 0;
      }
      #btnMidea{
        left: 250px;
        opacity: 0;
        pointer-events: none;
      }
      .cancelMidea{
      left: 195px;
    } */
    }

`;
