import {
  MdDashboardCustomize,
  MdStorage,
  MdOutlineCreate,
  MdHistory,
  MdSecurity,
} from "react-icons/md";

const links = [
  {
    id: 1,
    name: "Dashboard",
    path: "adminDashboard",
    icon: <MdDashboardCustomize />,
  },
  {
    id: 2,
    name: "Data",
    path: "adminData",
    icon: <MdStorage />,
  },
  {
    id: 3,
    name: "Create",
    path: "adminCreate",
    icon: <MdOutlineCreate />,
  },
  {
    id: 4,
    name: "Activity",
    path: "adminActivity",
    icon: <MdHistory />,
  },
];

export { links };
