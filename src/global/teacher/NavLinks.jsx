import {
  MdDashboardCustomize,
  MdStorage,
  MdOutlineCreate,
  MdHistory,
} from "react-icons/md";

const links = [
  {
    id: 1,
    name: "Dashboard",
    path: "teacherDashboard",
    icon: <MdDashboardCustomize />,
  },
  {
    id: 2,
    name: "Records",
    path: "teacherRecords",
    icon: <MdStorage />,
  },
  {
    id: 3,
    name: "AddData",
    path: "teacherAddData",
    icon: <MdOutlineCreate />,
  },
  {
    id: 4,
    name: "Activity",
    path: "teacherActivity",
    icon: <MdHistory />,
  },
];

export { links };
