import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const user = true;
  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>Agency</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contacts</a>
          <a href="/">Others</a>
        </div>
        <div className="right">
          {user ? (
            <div className="user">
              <img src="/user.png" alt="" />
              <span>Betty Renny</span>
              <Link to="/profile" className={"profile"}>
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <a href="">Sign In</a>
              <a href="" className="register">
                Sign Up
              </a>
            </>
          )}

          <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={() => setOpen(!open)} />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contacts</a>
            <a href="">Others</a>
            <a href="">Sign In</a>
            <a href="">Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
}
