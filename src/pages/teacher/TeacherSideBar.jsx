import { NavLink } from "react-router-dom";

import { links } from "../../global/teacher/NavLinks";
import { MdPersonPin } from "react-icons/md";

const TeacherSidebar = () => {
  return (
    <aside className="sidebar-container">
      <div className="flex flex-col justify-between">
        <div className="sidebar-data  space-y-5">
          <div className="user-logo mx-auto"></div>
          <ul className="space-y-2">
            <li className="nav-item mx-auto">
              <div className="admin">
                <span className="text-2xl">
                  <MdPersonPin />
                </span>
                <span className="text-md ml-5">Teacher</span>
              </div>
            </li>
            {links.map((data) => {
              return (
                <li className="nav-item mx-auto" key={data.id}>
                  <NavLink className="sidebar-items" to={data.path}>
                    <span className="data-icon text-2xl">{data.icon}</span>
                    <span className="text-md ml-5">{data.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default TeacherSidebar;
