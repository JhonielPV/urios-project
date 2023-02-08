import { Outlet } from "react-router-dom";

import AdminSidebar from "../../../pages/admin/AdminSidebar";

const AdminLayout = () => {
  return (
    <main className="admin-layout flex justify-start items-start w-full ">
      <div className="admin-nav">
        <AdminSidebar />
      </div>
      <div className="admin-content w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default AdminLayout;
