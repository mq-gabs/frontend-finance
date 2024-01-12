import { Icon } from "..";
import { EStatus } from "../../utils";
import { getStatusInfo } from "../../utils/functions";
import { StyledStatusCell } from "./status-cell.styles";

interface IStatusCell {
  status: EStatus;
}

export const StatusCell = ({ status }: IStatusCell) => {
  const statusInfo = getStatusInfo(status);

  return (
    <StyledStatusCell>
      <Icon name={statusInfo.icon} color={statusInfo.color} />
      <p>{statusInfo.name}</p>
    </StyledStatusCell>
  );
};
