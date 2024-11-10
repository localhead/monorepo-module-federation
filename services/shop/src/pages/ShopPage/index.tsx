import React, { FC, memo } from "react";

import { StyledShopPage } from "./styles";

export interface ShopPageProps {
  className?: string;
  style?: React.CSSProperties;
}

const _ShopPage: FC<ShopPageProps> = (props) => {
  const { ...restProps } = props;

  return <StyledShopPage {...restProps}>Shop</StyledShopPage>;
};

export const ShopPage = memo(_ShopPage);
