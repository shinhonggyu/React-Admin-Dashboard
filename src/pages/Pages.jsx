import Home from "./home/Home";
import List from "./list/List";
import Login from "./login/Login";
import New from "./new/New";
import Single from "./single/Single";
import { Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="products">
          <Route index element={<List />} />
          <Route path=":productId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default Pages;
