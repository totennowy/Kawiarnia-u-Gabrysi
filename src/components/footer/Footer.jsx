import React from "react";
import phoneIcon from "../../assets/call_black_24dp.svg";
import mailIcon from "../../assets/markunread_black_24dp.svg";

const Footer = () => {
  return (
    <section className="container footer" id="footer">
      <h2>Kontakt</h2>
      <div className="footer__side">
        <div className="footer__contact">
          <div className="footer__box">
            <img src={phoneIcon} alt="phone icon" />
            <p>
              ul.Zimowit 42, <br />
              35-605 Rzeszów
            </p>
          </div>

          <div className="footer__box">
            <img src={phoneIcon} alt="phone icon" />
            <p>+48 506 900 590</p>
          </div>

          <div className="footer__box">
            <img src={mailIcon} alt="e-mail icon" />
            <p>office@tituto.com</p>
          </div>
        </div>
        <div className="footer__map">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Zimowit%2042,%20Rzesz%C3%B3w&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <a href="https://fmovies-online.net"></a>
              <a href="https://www.embedgooglemap.net"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
