import React from "react";

export default function Header({ boton }) {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      Micro Frontend Header
      <button
        className="ml-4 bg-white text-blue-500 px-4 py-2 rounded"
        onClick={boton}
      >
        Siguiente
      </button>
    </div>
  );
}
