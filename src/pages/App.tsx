import React from "react";
import { Provider } from "mobx-react";

import Router from "@root/Router";
import ResetStyle from "@styles/reset";

const App = () => {
  return (
    <Provider>
      <Router />
      <ResetStyle />
    </Provider>
  );
};

export default App;
