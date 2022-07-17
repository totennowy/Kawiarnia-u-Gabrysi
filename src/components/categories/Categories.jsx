import React from "react";
import coffee from "../../assets/coffee-gc1d0cbcb2_1920.jpg";
import beans from "../../assets/coffe-grains-gbcc72b9db_1920.jpg";
import cake from "../../assets/pancakes-g050b113c5_1920.jpg";

const Categories = () => {
  return (
    <section className="container categories" id="categories">
      <h2>Oferta</h2>
      <div className="categories__box">
        <div className="categories__card">
          <a href="#">
            <img src={coffee} alt="coffee" />
          </a>
          <h3>Wyśmienite kawy</h3>
        </div>

        <div className="categories__card">
          <a href="#">
            <img src={beans} alt="coffee beans" />
          </a>
          <h3>Ziarna na wynos</h3>
        </div>

        <div className="categories__card">
          <a href="#">
            <img src={cake} alt="homemade cakes" />
          </a>
          <h3>Ciasta jak domowe</h3>
        </div>
      </div>
    </section>
  );
};

export default Categories;
