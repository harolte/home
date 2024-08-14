import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const [loadTaller, cargarContenidoTaller] = useState(false);

  const tallerContenido = () => {
    cargarContenidoTaller(true);
  };

  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <div className="text-center">
        <Header boton={tallerContenido} />
        <img
          src="https://i.ibb.co/CVYFJBM/avatar.webp"
          className="rounded-full w-32 mb-4 mx-auto"
          alt="Avatar"
        />
        <h5 className="text-xl font-medium leading-tight mb-2">Hola Mundo</h5>
        <p className="text-gray-500">Harolt Kruchinsky</p>

        {loadTaller && (
          <iframe
            src="https://main.d1grj6p2gqblae.amplifyapp.com/"
            title="Taller"
            style={{
              width: '100%',
              height: '600px',
              border: 'none',
              marginTop: '20px',
            }}
          />
        )}

        <Footer />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
