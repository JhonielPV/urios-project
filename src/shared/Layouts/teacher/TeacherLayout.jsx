import { Outlet } from "react-router-dom";
import TeacherSideBar from "../../../pages/teacher/TeacherSideBar";

const TeacherLayout = () => {
  return (
    <div className="teacher-layout flex justify-start items-start">
      <div className="teacher-nav ">
        <TeacherSideBar />
      </div>
      <main className="teacher-content w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default TeacherLayout;
