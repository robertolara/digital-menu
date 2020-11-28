import React from "react";

import BaseLayout from "components/layout/BaseLayout";

function Home(props) {
  return (
    <BaseLayout>
      <section className="section">
        <div className="container">
          <div className="column is-mobile is-half is-offset-one-quarter">
            <h3 className="title is-3">Configura tu menú.</h3>
            <form >
              <div className="field">
                <label className="label">Nombre</label>
                <div className="control">
                  <input
                    className={`input`}
                    type="text"
                    placeholder="Rest1"
                    name="store_name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Dirección</label>
                <div className="control">
                  <input
                    className={`input`}
                    type="text"
                    placeholder="Calle1 1234, Col. Dr"
                    name="store_address"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export default Home;