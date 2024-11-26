import React, { FC, memo } from "react";

import { calcNumbers } from "@packages/shared";
import { Link } from "react-router-dom";
import { StyledMainPage } from "./styles";
export interface MainPageProps {
  className?: string;
  style?: React.CSSProperties;
}

const _MainPage: FC<MainPageProps> = (props) => {
  const { ...restProps } = props;

  const calc = calcNumbers(2, 5);

  return (
    <StyledMainPage {...restProps}>
      <h3>
        {__PLATFORM__}
        {calc}
      </h3>
      <h2> 
        <Link to={"/admin"}>Admin page</Link>
      </h2>
      <br />
      <h2>
        <Link to={"/shop"}>Shop page</Link>
      </h2>
    </StyledMainPage>
  );
};

export const MainPage = memo(_MainPage);
