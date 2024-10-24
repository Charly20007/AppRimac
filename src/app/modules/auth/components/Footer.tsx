import React from "react";
import LogoDesktop from "../../../../assets/imgs/logo-rimac-white-desktop.png";
import LogoMovil from "../../../../assets/imgs/logo-rimac-white-movil.png";

import "./footer.scss";

export const Footer = () => {
  return (
    <div className="container-footer">
      <img
        src={LogoMovil}
        alt="img-logo-white-movil"
        className="container-footer__logo-movil"
      />
      <img
        src={LogoDesktop}
        alt="img-logo-white-desktop"
        className="container-footer__logo-desktop"
      />
      <div className="container-footer__separator" />
      <span className="container-footer__description">
        © 2023 RIMAC Seguros y Reaseguros.
      </span>
    </div>
  );
};
