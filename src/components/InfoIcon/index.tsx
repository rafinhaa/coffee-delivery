import { IconContainer, InfoContainer } from "./styles";
import { InfoIconProps } from "./types";

export const InfoIcon = ({ icon, iconColor, text }: InfoIconProps) => {
  return (
    <InfoContainer>
      <IconContainer iconColor={iconColor}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoContainer>
  );
};
