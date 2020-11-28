import React from "react";

import BaseLayout from "components/layout/BaseLayout";

function BusinessMenu(props) {
  return (
    <BaseLayout>
      {/* Cabeceras del Menu */}
      <section className="section"> 
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="is-size-1 has-text-centered">Menu</h1>
            </div>
          </div>
          <div className="columns is-mobile">
            {/* <div className="column">
              <figure className="image is-96x96 is-vcentered">
                <img src="https://bulma.io/images/placeholders/96x96.png"/>
              </figure>
            </div> */}
            <div className="column is-half is-offset-one-quarter">
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/45/45332.svg"/>
                  </p>
                </figure>
                <div className="content ml-5">
                  <p>
                    <strong>Happy Salads </strong>
                    <br/>
                    Ensaladas y comidas.
                    <br/>
                    <strong>Tel. 8184758650</strong>
                  </p>
                </div>
              </article>
            </div>
            {/* <div className="column is-one-quarter ">
            </div> */}
          </div>
        </div>
      </section>

      {/* Categorías del Menu */}

      {/* Categoría 1 del Menu */}
      <section className="section">
        <div class="container">
          <div className="columns is-mobile">
            <div className="column is-three-fifths  is-offset-one-fifth">
              <div className="content is-medium">
                <h6 className="title has-text-centered">Comidas</h6>
              </div>
            </div>
          </div>
          <hr/>
          {/* Elementos de Categoría */}
          <div className="columns is-mobile is-family-monospace">
            <div className="column is-half">
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3768/3768546.svg"/>
                  </p>
                </figure>
                <div className="content">
                  <p>
                    <strong>Ensalada de Pollo </strong>
                    <br/>
                    Ensalada de pollo con verduras y aderezo acompañada de sopa de coditos.
                  </p>
                </div>
                <div className="media-right">
                  <strong>$70.00</strong>
                </div>
              </article>
            </div>
            <div className="column is-half">
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/857/857681.svg"/>
                  </p>
                </figure>
                <div className="content">
                  <p>
                    <strong>Pechuga Rellena</strong>
                    <br/>
                    Pechuga de pollo rellena de jamon y queso acompañada de pasta Alfredo y verduras.
                  </p>
                </div>
                <div className="media-right">
                  <strong>$80.00</strong>
                </div>
              </article>
            </div>
          </div>

          <div className="columns is-mobile is-family-monospace">
            <div className="column is-half">
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/857/857681.svg"/>
                  </p>
                </figure>
                <div className="content">
                  <p>
                    <strong>Ensalada Tere </strong>
                    <br/>
                    Pechuga spicy acompañada de sopa de coditos con ensalada verde y aderezo tipo ranch.
                  </p>
                </div>
                <div className="media-right">
                  <strong>$80.00</strong>
                </div>
              </article>
            </div>
            <div className="column is-half">
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/857/857681.svg"/>
                  </p>
                </figure>
                <div className="content">
                  <p>
                    <strong>Hamburguesa de Arrachera</strong>
                    <br/>
                    Hamburguesa con carne de arrachera, lechuga y tomate acompañada de papas a la francesa.
                  </p>
                </div> 
                <div className="media-right">
                  <strong>$70.00</strong>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      
      {/* Categoría 2 del Menu */}
      <section className="section">  
        <div className="container ">
          {/* Categoría 1 del Menu */}
          <div className="columns is-mobile">
            <div className="column is-three-fifths  is-offset-one-fifth">
              <div className="content is-medium">
                <h6 className="title has-text-centered">Postres.</h6>
              </div>
            </div>
          </div>
          <hr/>
          {/* Elementos de Categoría */}
          <div className="columns is-mobile is-family-monospace">
            <div className="column is-half-mobile">
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3081/3081792.svg"/>
                  </p>
                </figure>
                <div className="content">
                  <p>
                    <strong>Mousse di cioccolato </strong>
                    <br/>
                    Chocolate mousse.
                  </p>
                </div>
                <div className="media-right">
                <strong>$8.95</strong>
                </div>
              </article>
            </div>
            <div className="column is-half">
              <article className="media">
                <figure className="media-left">
                  <p className="image is-64x64">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3081/3081792.svg"/>
                  </p>
                </figure>
                <div className="content">
                  <p>
                    <strong>Creme Brulée</strong>
                    <br/>
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
                <div className="media-right">
                <strong>$8.95</strong>
                </div>
              </article>
            </div>
          </div>

          
        </div>
      </section>
    </BaseLayout>
  );
}

export default BusinessMenu;