import { FunctionComponent } from "react";
import { BsCircleFill } from "react-icons/bs";
import { ISkill } from "../../type";

interface BarProps {
  data: ISkill;
}

const Bar: FunctionComponent<BarProps> = ({ data }) => {
  const { name, level } = data;
  

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full">
      <div 
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-700 to-blue-600"
        style={{ width: level }}
      >
        <BsCircleFill className="mr-3 text-blue-500" />
        <span className="font-bold">{name}</span>
      </div>
    </div>
  );
};

export default Bar;



