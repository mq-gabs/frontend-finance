import { TColors, TIcon } from "../../utils";
import { StyledIcon } from "./icon.styles";

import { CgGym } from "react-icons/cg";
import { FaCarSide, FaBook, FaSearch } from "react-icons/fa";
import {
  FaMasksTheater,
  FaUserDoctor,
  FaCircleArrowUp,
  FaCircleArrowDown,
} from "react-icons/fa6";
import { GiPayMoney, GiReceiveMoney, GiMedicines } from "react-icons/gi";
import { ImAirplane, ImCross } from "react-icons/im";
import {
  IoIosWarning,
  IoIosCheckmarkCircle,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { IoToday } from "react-icons/io5";
import {
  MdDelete,
  MdEdit,
  MdFastfood,
  MdSportsEsports,
  MdSportsTennis,
  MdDevicesOther,
  MdWatchLater,
  MdCancel,
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
  exit: FaCircleArrowUp,
  enter: FaCircleArrowDown,
  warn: IoIosWarning,
  ok: IoIosCheckmarkCircle,
  late: MdWatchLater,
  cancel: MdCancel,
  payday: IoToday,
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
