import React, { FC, memo } from "react";

import placeholder from "@assets/images/placeholderImageGray.png";
import { AlarmIcon } from "@packages/icons";
import { StyledMainPage } from "./styles";
export interface MainPageProps {
  className?: string;
  style?: React.CSSProperties;
}

const _MainPage: FC<MainPageProps> = (props) => {
  const { ...restProps } = props;

  return (
    <StyledMainPage {...restProps}>
      <img src={placeholder} width={75} height={50} />
      <AlarmIcon size={50} color="black" />
      <h3>{__PLATFORM__}</h3>
    </StyledMainPage>
  );
};

export const MainPage = memo(_MainPage);
