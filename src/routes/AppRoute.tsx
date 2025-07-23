import { Routes, Route } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";

import ShowMenu from "../pages/modules/customer/ShowMenu";

const AppRoute = () => {
  return (
    <Routes>
      {/** Route for Customer*/}
      {/* element={<CustomerHome /> */}
      <Route path="/customer" element={<CustomerLayout />}>
        <Route index element={<ShowMenu />} />
        <Route path="/customer/show-menu" />
        <Route path="/customer/show/:showID" />
        <Route path="/customer/show/:showID/:showScheduleID" />
      </Route>

      {/** Other Routes*/}
      <Route path="/unathorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
