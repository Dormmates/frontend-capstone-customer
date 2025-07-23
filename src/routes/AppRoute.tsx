import { Routes, Route } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";
import CustomerHome from "../pages/modules/customer/CustomerHome";

import ShowMenu from "../pages/modules/customer/ShowMenu";

const AppRoute = () => {
  return (
    <Routes>
      {/** Route for Customer*/}
      {/* element={<CustomerHome /> */}
      <Route path="/customer" element={<CustomerLayout />}>
        <Route index element={<CustomerHome />} />
        <Route path="menu" element={<ShowMenu />} />
        <Route path="show/:showID" />
        <Route path="show/:showID/:showScheduleID" />
      </Route>

      {/** Other Routes*/}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
