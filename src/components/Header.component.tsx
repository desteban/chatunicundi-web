import React, { Component } from "react";

function HeaderComponent() {
  return (
    <div className="fixed">
      <nav className="nav-wrapper verde-u">
        <span className="brand-logo center">ChatUnicundi</span>
      </nav>

      <ul id="tabs-swipe-demo" className="tabs">
        <li className="tab col s3">
          <a href="#test-swipe-1">Grupos</a>
        </li>
        <li className="tab col s3">
          <a className="" href="#test-swipe-2">
            Ajustes
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderComponent;
