import { useQuery } from "react-query";
import TeachersTable from "./TeachersTable";
import { getTeachers } from "../../../../queries/queries";

const Accounts = () => {
  const teachers = useQuery("teachers", getTeachers);

  if (teachers.isLoading) {
    return <h1>Loading...</h1>;
  } else if (teachers.isError) {
    return <h1>{teachers.error.message}</h1>;
  } else {
    return <TeachersTable data={teachers} />;
  }
};

export default Accounts;
