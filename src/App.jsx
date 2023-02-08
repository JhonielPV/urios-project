import { Routes, Route } from "react-router-dom";

// layout
import RootLayout from "./shared/Layouts/RootLayout";

// admin
import {
  AdminLayout,
  AdminDashboard,
  DataAccounts,
  DataStudents,
  AdminActivity,
  ActivitySections,
  ActivityAccount,
  ActivityImport,
  CreateLayout,
  DataLayout,
} from "./pages/admin/adminGlobal";

//teacher
import {
  TeacherLayout,
  TeacherDashboard,
  TeacherRecords,
  TeacherAddData,
  TeacherActivity,
} from "./pages/teacher/teacherGlobal";

// components
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* unprotected routes */}
        <Route path="/" element={<Login />} />

        {/* protected routes */}

        {/* admin */}
        <Route path="admin" element={<AdminLayout />}>
          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="adminData" element={<DataLayout />}>
            <Route path="accounts" element={<DataAccounts />} />
            <Route path="students" element={<DataStudents />} />
          </Route>
          <Route path="adminCreate" element={<CreateLayout />}>
            <Route path="sections" element={<ActivitySections />} />
            <Route path="account" element={<ActivityAccount />} />
            <Route path="import" element={<ActivityImport />} />
          </Route>
          <Route path="adminActivity" element={<AdminActivity />} />
        </Route>

        {/* teacher */}
        <Route path="teacher" element={<TeacherLayout />}>
          <Route path="teacherDashboard" element={<TeacherDashboard />} />
          <Route path="teacherRecords" element={<TeacherRecords />} />
          <Route path="teacherAddData" element={<TeacherAddData />} />
          <Route path="teacherActivity" element={<TeacherActivity />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
