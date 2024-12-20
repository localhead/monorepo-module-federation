import React, { FC, memo } from "react";

import { Link } from "react-router-dom";
export interface ShopPageProps {
  className?: string;
  style?: React.CSSProperties;
}

const _ShopPage: FC<ShopPageProps> = (props) => {
  const { ...restProps } = props;

  return (
    <div {...restProps}>
      <h3>This is Shop Page</h3>
      <br />
      <h2>
        <Link to={"/admin"}>to Admin page</Link>
      </h2>
      <br />
      <h2>
        <Link to={"/"}>to Main page</Link>
      </h2>
    </div>
  );
};

export const ShopPage = memo(_ShopPage);
