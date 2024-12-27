"use client";
import { FunctionComponent, useState } from "react";
import { IProject } from "../../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    description,
    image_path,
    deployed_url,
    GitHub_url,
    category,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        width="300"
        height="150"
        layout="responsive"
      />
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <div className="grid md:grid-cols-2 absolute top-0 left-0 z-10 h-auto w-full gap-x-12 text-black bg-gray-100 p-2">
          <div>
            {/* <img src={image_path} alt={name} /> */}

            <Image
              src={image_path}
              alt={name}
              width="300"
              height="150"
              layout="responsive"
            />

            <div className="flex justify-center my-4 space-x-3">
              <a
                href={GitHub_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200"
              >
                <AiFillGithub /> <span>GitHub</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>

            <button
              onClick={() => setShowDetail(false)}
              className="absolute p-1 rounded-full top-3 right-3 focus:outline-none bg-gray-200"
            >
              <MdClose size={30} />
            </button>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-med md:text-2xl">{name}</h2>
            <h3 className="mb-3 font-medium">{description}</h3>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
