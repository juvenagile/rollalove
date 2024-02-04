import React from 'react';


const RollaloveApp = () => {
  return (
    <div className="container mx-auto p-8 h-screen flex flex-col items-center justify-center bg-white-100">
  {/* Contenedor principal */}
  <div className="relative w-[375px] h-[812px] bg-cover bg-center rounded-lg overflow-hidden">
    <img
      src="https://www.shutterstock.com/shutterstock/photos/2122700972/display_1500/stock-photo-image-of-young-asian-woman-company-worker-in-glasses-smiling-and-holding-digital-tablet-standing-2122700972.jpg"
      alt="Fondo de la persona"
      className="absolute inset-0 w-full h-full object-cover rounded-lg"
    />
    
    {/* Contenido sobre el fondo */}
    <div className="absolute top-0 left-0 m-4 transform translate-y-3 transform translate-x-3">
      {/* Imagen circular en la esquina superior izquierda */}
      <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-photo/portrait-attractive-glad-cheerful-man-260nw-2042557844.jpg"
          alt="Avatar de German"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto "German" */}
      <p className="text-white font-bold text-xl ml-2 transform -translate-y-12 transform translate-x-20">German</p>
    </div>

    {/* Rectangulo con nombre "Elizabeth" */}
    <div className="absolute bottom-1/3 transform translate-y-1/3 bg-white bg-opacity-90 p-4 rounded-lg">
      <p className="text-xl font-bold">Elizabeth</p>
      <p className="text-sm">Le encanta pasar el tiempo con personas interesantes</p>
    </div>

    {/* Botones en la parte inferior */}
    <div className="absolute bottom-20 left-0 right-0 flex justify-between p-4">
      {/* Botón Rojo */}
      <div
      className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
      //onClick={mostrarMensajeHandler}
      >
        <p className="text-white font-bold">X</p>
      </div>

      {/* Botón Verde */}
      <div
      className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-110"
      //onClick={mostrarMensajeHandler}
      >
        <p className="text-white font-bold">Si</p>
      </div>
    </div>
  </div>
</div>

  );
};
