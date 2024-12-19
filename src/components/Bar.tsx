import { FunctionComponent } from "react";
import { ISkill } from "../../type";

interface BarProps {
  data: ISkill;
}

const Bar: FunctionComponent<BarProps> = ({ data }) => {
  const { name, level } = data;

  return (
    <div>
      {/* Your content here */}
      <div>{name}</div>
      {/* <p>{level}</p> */}
    </div>
  );
};

export default Bar;

