import "./header-global.scss";
import LogoRimac from "../../../assets/imgs/logo-rimac.png";
import React from "react";

const HeaderGlobal = () => {
  return (
    <div className="header-all">
      <img src={LogoRimac} alt="logo principal" className="header-all__logo" />
      <div className="header-all__label">
        <span className="header-all__label__buy">¡Compra por este medio!</span>
        <span className="material-symbols-outlined header-all__label__icon">
          call
        </span>
        <span  className="header-all__label__number">(01) 411 6001</span>
      </div>
    </div>
  );
};
export default HeaderGlobal;
