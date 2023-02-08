import { Outlet, NavLink } from "react-router-dom";

const DataLayout = () => {
  return (
    <div className="data-layout p-5 text-white w-full h-screen">
      <div className="data-title border-b pb-3 border-white text-2xl  font-semibold">
        Data
      </div>
      <div className="data-content p-5 pt-12 gap-5 space-y-10">
        <h3 className="text-md font-semibold py-3 bg-slate-600 px-3 rounded-md">
          Account List
        </h3>
        <ul className="flex pt-8 space-x-5 px-3 items-center list-none">
          <li className="data-links">
            <NavLink to="accounts">Accounts</NavLink>
          </li>
          <li className="data-links">
            <NavLink to="students">Students</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default DataLayout;
