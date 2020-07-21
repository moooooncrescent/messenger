import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import NotFound from "../../pages/NotFound";
import Conversations from "../../pages/Conversations";
import ConversationList from "../../pages/Conversations/ConversationList";
import Forgot from "../../pages/Auth/Forgot";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/" exact>
          Home
        </Route>
        <Route component={NotFound} />
      </Switch>
    </main>
  );
};
export default Main;
