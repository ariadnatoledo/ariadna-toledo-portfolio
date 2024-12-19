import { RiComputerLine } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { services } from "../../data";

// Hardcoded icons
const serviceIcons = [
  {
    Icon: RiComputerLine,
  },
  {
    Icon: FiDatabase,
  },
  {
    Icon: AiOutlineApi,
  },
  {
    Icon: MdOutlineDesignServices,
  },
];

function Home() {
  console.log("CLIENT", services);

  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold">Ariadna Toledo Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {services.map((service, index) => {
          const IconComponent = serviceIcons[index].Icon;
          return (
            <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md">
              <div className="text-4xl mb-3 text-blue-500">
                <IconComponent />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p
                className="text-gray-700 mt-2"
                dangerouslySetInnerHTML={{ __html: service.about }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;




// import { RiComputerLine } from "react-icons/ri";
// import { FiDatabase } from "react-icons/fi";
// import { AiOutlineApi } from "react-icons/ai";
// import { MdOutlineDesignServices } from "react-icons/md";
// import { services } from "../../data";

// const serviceIcons = [
//   {
//     Icon: RiComputerLine,
//   },
//   {
//     Icon: FiDatabase,
//   },
//   {
//     Icon: AiOutlineApi,
//   },
//   {
//     Icon: MdOutlineDesignServices,
//   },
// ];

// function Home() {
//   console.log("CLIENT", services);
//   return (
//     <>
//       <h1 className="text-3xl font-bold px-5">Ariadna Toledo Portfolio</h1>
//     </>
//   );
// }

// export default Home;

