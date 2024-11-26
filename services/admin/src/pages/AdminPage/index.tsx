import React, { FC, memo } from "react";

import { Link } from "react-router-dom";

export interface AdminPageProps {
  className?: string;
  style?: React.CSSProperties;
}

const _AdminPage: FC<AdminPageProps> = (props) => {
  const { ...restProps } = props;

  return (
    <div {...restProps}>
      <h3>This is Admin page</h3>
      <br />
      <h2>
        <Link to={"/"}>Main page</Link>
      </h2>
      <br />
      <h2>
        <Link to={"/shop"}>Shop page</Link>
      </h2>
    </div>
  );
};

export const AdminPage = memo(_AdminPage);
