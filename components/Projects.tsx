const Projects = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-4/5 mx-auto my-4 ">
      <h1 className="text-2xl md:text-4xl flex justify-center mt-4 mb-6">PROJECTS</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Mini Tarjeta 1 */}
        <div className="bg-gray-200 p-4 rounded-md">
          <img
            src="ruta-de-la-imagen-1.jpg"
            alt="Proyecto 1"
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-semibold mb-2">Proyecto 1</h2>
          <p className="text-gray-700">Descripción del Proyecto 1.</p>
        </div>

        {/* Mini Tarjeta 2 */}
        <div className="bg-gray-200 p-4 rounded-md">
          <img
            src="ruta-de-la-imagen-2.jpg"
            alt="Proyecto 2"
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-semibold mb-2">Proyecto 2</h2>
          <p className="text-gray-700">Descripción del Proyecto 2.</p>
        </div>

        {/* Mini Tarjeta 3 */}
        <div className="bg-gray-200 p-4 rounded-md">
          <img
            src="ruta-de-la-imagen-3.jpg"
            alt="Proyecto 3"
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-semibold mb-2">Proyecto 3</h2>
          <p className="text-gray-700">Descripción del Proyecto 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
