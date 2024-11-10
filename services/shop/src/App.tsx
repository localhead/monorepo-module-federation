import React from "react";

import { MainPage } from "@pages/MainPage";
import { GlobalStyle } from "@utils/globalStyle";
import { Outlet } from "react-router-dom";

export const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <MainPage />
      <Outlet />
    </div>
  );
};
