import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="App h-screen bg-slate-800">
      <Outlet />
    </div>
  );
};

export default RootLayout;
