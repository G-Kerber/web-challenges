import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  onSetLightOn,
  onSetLightOff,
  NumberOfLight,
  lightsOnNumber,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights off");
          onSetLightOff();
        }}
        disabled={lightsOnNumber === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          console.log("Turn all lights on");
          onSetLightOn();
        }}
        disabled={lightsOnNumber === NumberOfLight}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
