import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { Typography } from "../../../../../../components/Typography";
import { defaultTheme } from "../../../../../../styles/themes/default";
import { SectionTitleContainer } from "./styles";
import { TSectionTitleProps } from "./types";

export const SectionTitle = ({ title, subtitle, type }: TSectionTitleProps) => {
  const colorMapping = {
    map: defaultTheme.colors["yellow-dark"],
    dollar: defaultTheme.colors["purple"],
  };

  const Icon = () => {
    if (type === "map")
      return <MapPinLine color={colorMapping[type]} size={22} />;
    return <CurrencyDollar color={colorMapping[type]} size={22} />;
  };

  return (
    <SectionTitleContainer>
      <Icon />
      <div>
        <Typography.Text color="subtitle">{title}</Typography.Text>
        <Typography.Text size="s">{subtitle}</Typography.Text>
      </div>
    </SectionTitleContainer>
  );
};
