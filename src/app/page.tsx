import { RiComputerLine } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineApi } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { services } from "../../data";

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
    <div className="flex flex-col px-6 pt-1">
      <h5 className="my-3 font-medium">
        Hello! I'm Ariadna, a Software Engineer with a passion for
        problem-solving and innovation. I approach every project with an
        inquisitive mindset, always eager to explore new technologies and
        concepts. My strong project management skills help me lead initiatives
        efficiently while staying focused on delivering high-quality results.
      </h5>
      <div>
        <h6 className="my-3 text-xl font-bold">What I Offer</h6>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 mb-5">
        {services.map((service, index) => {
          const IconComponent = serviceIcons[index].Icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md"
            >
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
