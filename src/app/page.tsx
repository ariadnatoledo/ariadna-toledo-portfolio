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
    <div className="flex flex-col px-6 pt-1 space-y-4">
      <h5 className="my-3 font-medium space-y-4">
       <p> Hello! I'm Ariadna, a Software Engineer with a passion for
        problem-solving and innovation. I have a diverse professional
        background, including experience working for a video game company and
        managing large-scale film productions. My perseverance, curiosity, and
        ability to take initiative led me to incredible opportunities like
        working at Festival de Cannes in 2024, where I collaborated with
        talented individuals and navigated the complexities of the Film Sales
        Market. I believe in embracing life’s different journeys and constantly
        seeking new challenges to grow both personally and professionally. </p>
        
       <p>In
        addition to my film and project management experience, I’ve built a
        strong foundation in software engineering, highlighted by projects like
        Vinilo App, a full-stack social media platform for vinyl collectors. As
        a solo developer, I designed and implemented the database, server, and
        client, creating a seamless user experience for live messaging and vinyl
        discovery. I’ve also worked on InStock, an inventory management system,
        where I contributed to building a responsive React front end, RESTful
        APIs with Express.js, and efficient MySQL data handling—all while
        collaborating effectively in an Agile team environment. </p>
        
      <p>Through these
        projects and my participation in three Hackathons, including one with
        META, I’ve refined my ability to think critically and deliver impactful
        solutions under tight deadlines, like our Meta AI Button, an educational
        AI tool for personal and professional growth. As a Hispanic immigrant
        who came to Canada in 2017 without English, I’ve faced challenges
        head-on, driven by my fascination with computers and technology. Despite
        initial setbacks due to a lack of a math background, years of hard work
        and determination earned me a full government scholarship in Software
        Engineering. </p> 
        
       <p>Now, I’m excited to combine my unique strengths from past
        experiences in film and tech, along with my passion for innovation, to
        build meaningful relationships and create impactful contributions
        wherever I work.</p> 
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
                className="text-white mt-2"
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
