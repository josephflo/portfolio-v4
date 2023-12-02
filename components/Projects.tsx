import Image from "next/image";

const Projects = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-4/5 mx-auto my-4 ">
      <h1 className="text-2xl md:text-4xl flex justify-center mt-4 mb-6">PROJECTS</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Mini Tarjeta 1 */}
        <div className="bg-gray-200 p-4 rounded-md">
          <Image
            src="/DriveFlix.png"
            alt="Proyecto 1"
            width={400}
            height={200}
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-semibold mb-2">DriveFlix</h2>
          <p className="text-gray-700">This is a project built with Next.js 14, utilizing technologies such as React, Tailwind, and Typescript. It's an application designed for car rentals, offering a wide range of manufacturers and models that you can explore using the search feature. Additionally, each car comes with a comprehensive description, including photos from various angles and details such as whether it operates on gas or electricity. The pricing for renting each model is also provided in every detail.</p>
        </div>

        {/* Mini Tarjeta 2 */}
        <div className="bg-gray-200 p-4 rounded-md">
          <Image
            src="/animemaniatic.png"
            alt="Proyecto 2"
            width={400}
            height={200}
            className="w-full h-32 object-cover mb-4 rounded-md hover:opacity-50 transition-opacity duration-300" 
          />
          <h2 className="text-xl font-semibold mb-2">AnimeManiatic</h2>
          <p className="text-gray-700">A user-friendly web app designed to help you explore an extensive list of anime titles fetched from an API. It incorporates technologies such as React, Typescript, Tailwind, and Framer Motion for smooth animations. Dive into the vast realm of AnimeManiatic, where you can discover your favorite anime along with details like episode count and ratings.</p>
        </div>

        {/* Mini Tarjeta 3 */}
        <div className="bg-gray-200 p-4 rounded-md">
          <Image
            src="/freebble.png"
            alt="Proyecto 3"
            width={400}
            height={200}
            className="w-full h-32 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-semibold mb-2">Freebble</h2>
          <p className="text-gray-700">Dribble Clone is an online platform widely embraced by designers and illustrators. It enables users to showcase their talent through posts, garnering feedback and ratings. Users can log in, publish their work, and draw inspiration from others' creations. This full-stack app leverages technologies such as React, Tailwind, Typescript, Cloudinary, GraphQL, JSON Web Token, and NextAuth.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
