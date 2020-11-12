import React from "react";

function HeaderComponent(tabs: boolean = false) {
  return (
    <div id="cabecera" className="fixed">
      <nav className="nav-wrapper verde-u">
        <span className="brand-logo center">ChatUnicundi</span>
      </nav>

      {tabs ? tab() : null}
    </div>
  );
}

const tab = () => {
  return (
    <ul id="tabs-swipe-demo" className="tabs hide-on-med-and-up">
      <li className="tab col s3">
        <a href="#test-swipe-1">Grupos</a>
      </li>
      <li className="tab col s3">
        <a className="" href="#test-swipe-2">
          Ajustes
        </a>
      </li>
    </ul>
  );
};

export default HeaderComponent;
