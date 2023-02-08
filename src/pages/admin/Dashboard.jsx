import { useQuery } from "react-query";
import {
  getStudents,
  getTeachers,
  getSections,
  getGradeLevels,
  getInactiveAccounts,
} from "../../../queries/queries";
import {
  Students,
  Inactive,
  Levels,
  Sections,
  Teacher,
} from "../../components/Cards/GlobalCards";

const Dashboard = () => {
  const students = useQuery("students", getStudents);
  const teachers = useQuery("teachers", getTeachers);
  const sections = useQuery("sections", getSections);
  const inactives = useQuery("inactives", getInactiveAccounts);
  const gradLevels = useQuery("gradLevels", getGradeLevels);

  return (
    <div className="main-dashboard p-5">
      <div className="dashboard-title border-b pb-3 border-white text-2xl text-white font-semibold">
        Dashboard
      </div>
      <div className="dashboard-content grid grid-cols-3 pt-12 gap-5">
        <Sections data={sections} />
        <Levels data={gradLevels} />
        <Teacher data={teachers} />
        <Students data={students} />
        <Inactive data={inactives} />
      </div>
    </div>
  );
};

export default Dashboard;
