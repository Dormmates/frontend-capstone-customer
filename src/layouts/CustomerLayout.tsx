import CustomerHeader from "../components/CustomerHeader";
import { Outlet } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <div className="md:min-w-[800px] min-h-dvh">
      <CustomerHeader />
      <div className="flex flex-col h-[calc(100vh-120px)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default CustomerLayout;
