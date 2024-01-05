import { TColors, TIcon } from "../../utils";
import { StyledIcon } from "./icon.styles";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

import { CgGym } from "react-icons/cg";
import { FaCarSide, FaBook, FaSearch } from "react-icons/fa";
import { FaMasksTheater, FaUserDoctor } from "react-icons/fa6";
import { GiPayMoney, GiReceiveMoney, GiMedicines } from "react-icons/gi";
import { ImAirplane, ImCross } from "react-icons/im";
import {
  MdDelete,
  MdEdit,
  MdFastfood,
  MdSportsEsports,
  MdSportsTennis,
  MdDevicesOther,
} from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { TbPigMoney } from "react-icons/tb";

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
  trip: ImAirplane,
  enterteinment: PiTelevisionSimpleFill,
  study: FaBook,
  cross: ImCross,
  search: FaSearch,
  pills: GiMedicines,
  doctor: FaUserDoctor,
  game: MdSportsEsports,
  sport: MdSportsTennis,
  device: MdDevicesOther,
};

export const Icon = ({
  name = "edit",
  size = 1,
  color = "primary",
}: {
  name: TIcon;
  size?: number;
  color?: TColors;
}) => {
  const RenderIcon = icons[name];

  return (
    <StyledIcon size={size} color={color}>
      <RenderIcon />
    </StyledIcon>
  );
};
