import { languages } from "../../../data";
import { tools } from "../../../data";
import { BsCircleFill } from "react-icons/bs";
import Bar from "@/components/Bar";

const skillIcons = [
  {
    Icon: BsCircleFill,
  },
];

function resumePage() {
  return (
    <div className="px-6 py-2">
      {/* Education and experience */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Diploma, Software Engineer
            </h5>
            <p className="font-semibold">BrainStation - Vancouver, BC (2024)</p>
            <p className=" my-3">
              Graduated with a full scholarship in Software Engineering,
              currently building a social media app and eager to take on new
              challenges.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">BrainStation Capstone</h5>
            <p className="font-semibold">Vinilo app</p>
            <p className=" my-3">
              Built a full-stack social media platform for vinyl collectors to
              share their collections, connect with other enthusiasts through
              live messaging, and discover vinyl-related events and shows,
              handling everything from database structure to server and client
              development.
            </p>
          </div>
        </div>
      </div>
      {/* Languages & tools */}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
          {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
          {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default resumePage;
