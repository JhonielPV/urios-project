import StudentTable from "./StudentTable";

import { useQuery } from "react-query";
import { getStudents } from "../../../../queries/queries";

const Students = () => {
  const students = useQuery("students", getStudents);

  if (students.isLoading) {
    return <h1>Loading...</h1>;
  } else if (students.isError) {
    return <h1>{students.error.message}</h1>;
  } else {
    return <StudentTable data={students} />;
  }
};

export default Students;
