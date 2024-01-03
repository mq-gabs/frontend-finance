import { MdDelete, MdEdit, MdFastfood } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { TColors, TIcon } from "../../utils";
import { StyledIcon } from "./icon.styles";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { FaMasksTheater } from "react-icons/fa6";

export const icons = {
  edit: MdEdit,
  delete: MdDelete,
  food: MdFastfood,
  transport: FaCarSide,
  arrowLeft: IoIosArrowDropleftCircle,
  arrowRight: IoIosArrowDroprightCircle,
  give: GiPayMoney,
  receive: GiReceiveMoney,
  save: TbPigMoney,
  gym: CgGym,
  leisure: FaMasksTheater,
};

export const Icon = ({
  name = "edit",
  size = 1,
  color,
}: {
  name: TIcon;
  size: number;
  color: TColors;
}) => {
  const RenderIcon = icons[name];

  return (
    <StyledIcon size={size} color={color}>
      <RenderIcon />
    </StyledIcon>
  );
};
