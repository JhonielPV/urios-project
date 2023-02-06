import { Routes, Route } from "react-router-dom";

// layout
import RootLayout from "./shared/Layouts/RootLayout";

// admin
import {
  AdminLayout,
  AdminDashboard,
  AdminData,
  AdminCreate,
  AdminActivity,
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
          <Route path="adminData" element={<AdminData />} />
          <Route path="adminCreate" element={<AdminCreate />} />
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
