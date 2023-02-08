const StudentTable = ({ data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-md text-left border-slate-600 text-gray-500  ">
        <thead className="text-md bg-slate-600 text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID number
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email Address
            </th>
            <th scope="col" className="px-6 py-3">
              Grade Level
            </th>

            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody className="border border-slate-600 ">
          {data.data.students.map((student) => {
            return (
              <tr key={student.id} className="bg-gray-800  text-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium   whitespace-nowrap  "
                >
                  {student.id_number}
                </th>
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.email_address}</td>
                <td className="px-6 py-4">{student.grade_level}</td>
                <td className=" py-4 text-right">
                  <button className="font-medium text-white px-3 py-2 rounded-md bg-blue-500">
                    Update
                  </button>
                </td>
                <td className=" pr-5 py-4 text-right">
                  <button className="font-medium text-white px-3 py-2 rounded-md bg-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
