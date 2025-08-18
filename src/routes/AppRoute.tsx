import { Routes, Route } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import Unauthorized from "../pages/Unauthorized";
import NotFound from "../pages/NotFound";
import CustomerHome from "../pages/modules/customer/CustomerHome";
import ShowMenu from "../pages/modules/customer/ShowMenu";
import SelectedShowLayout from "../layouts/SelectedShowLayout";
import ShowSchedule from "../pages/modules/customer/ShowSchedule";
import SeatSelection from "../pages/modules/customer/SeatSelection";
import InputCustomerDetails from "../pages/modules/customer/InputCustomerDetails";

const AppRoute = () => {
  return (
    <Routes>
      {/** Route for Customer*/}
      <Route path="/customer" element={<CustomerLayout />}>
        <Route index element={<CustomerHome />} />
        <Route path="menu" element={<ShowMenu />} />
        <Route path="show/:showID" element={<SelectedShowLayout />}>
          <Route index element={<ShowSchedule />} />
          <Route path=":showScheduleID" element={<SeatSelection />} />
        </Route>
      </Route>

      {/** Other Routes*/}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;
