import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const [loadTaller, setLoadTaller] = useState(false);

  const handleLoadTaller = () => {
    setLoadTaller(true);
  };

  return (
    
   <>
   <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      {loadTaller ? (
        <div>
          <iframe
          //cambiar aqui el nuevo
            src="https://main.d279we5xa4psmh.amplifyapp.com/"
            title="Taller"
            style={{
              width: '100%',
              height: '600px',
              border: 'none',
              marginTop: '20px',
            }}
            
          />
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setLoadTaller(false)}
          >
            Regresar a Home
          </button>
        </div>
      ) : (
        <div className="text-center">
          <img
            src="https://i.ibb.co/CVYFJBM/avatar.webp"
            className="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 className="text-xl font-medium leading-tight mb-2">Hola Mundo</h5>
          <p className="text-gray-500">Harolt Kruchinsky</p>
          <button
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleLoadTaller}
          >
            Ir a Taller
          </button>
        </div>
      )}
      <Footer />
    </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
