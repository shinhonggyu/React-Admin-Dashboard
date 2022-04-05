import Home from "./home/Home";
import List from "./list/List";
import Login from "./login/Login";
import New from "./new/New";
import Single from "./single/Single";
import { Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "../formSource";

function Pages() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={userInputs} title="Add New User" />}
          />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route
            path="new"
            element={<New inputs={productInputs} title="Add New Product" />}
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default Pages;
