import { TColors, TIcon } from "../../utils";
import { StyledIcon } from "./icon.styles";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { CgGym } from "react-icons/cg";
import {
  FaCarSide,
  FaBook,
  FaSearch,
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import {
  FaMasksTheater,
  FaUserDoctor,
  FaCircleArrowUp,
  FaCircleArrowDown,
  FaMoneyBill1Wave,
  FaRegObjectGroup,
} from "react-icons/fa6";
import {
  GiPayMoney,
  GiReceiveMoney,
  GiMedicines,
  GiClothes,
} from "react-icons/gi";
import { ImAirplane, ImCross } from "react-icons/im";
import {
  IoIosWarning,
  IoIosCheckmarkCircle,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { IoToday, IoEyeSharp } from "react-icons/io5";
import { LuPiggyBank } from "react-icons/lu";
import {
  MdDelete,
  MdEdit,
  MdFastfood,
  MdSportsEsports,
  MdSportsTennis,
  MdDevicesOther,
  MdWatchLater,
  MdCancel,
  MdQuestionMark,
  MdOutlineStickyNote2,
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
  categories: BiSolidCategoryAlt,
  pay: FaMoneyBill1Wave,
  clothe: GiClothes,
  none: MdQuestionMark,
  group: FaRegObjectGroup,
  throwLeft: FaArrowAltCircleLeft,
  throwRight: FaArrowAltCircleRight,
  eye: IoEyeSharp,
  loading: AiOutlineLoading3Quarters,
  pig: LuPiggyBank,
  note: MdOutlineStickyNote2,
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
  const RenderIcon = icons[name] || icons["none"];

  return (
    <StyledIcon size={size} color={color}>
      <RenderIcon />
    </StyledIcon>
  );
};
