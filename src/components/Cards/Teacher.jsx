const Teacher = ({ data }) => {
  let content;
  if (data.isLoading) {
    content = <h1>Loading...</h1>;
  } else if (data.isError) {
    content = <h1>{data.error}</h1>;
  } else {
    content = (
      <div className="card">
        <h5 className="card-title">{data.data.title}</h5>
        <div className="card-body">
          <p className="text-sm">
            Teacher Accounts: {data.data.teachers.length}
          </p>
        </div>
      </div>
    );
  }
  return content;
};

export default Teacher;
