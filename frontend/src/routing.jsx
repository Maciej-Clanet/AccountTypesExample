import { Routes, Route, Navigate } from "react-router";
import { useUser } from "./contexts/UserContext";
import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import TeacherLayout from "./layouts/TeacherLayout/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout/StudentLayout";

// pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Auth from "./pages/Auth/Auth";
import TeacherDash from "./pages/TeacherDash/TeacherDash";
import StudentDash from "./pages/StudentDash/StudentDash";

// Protected route component for role-based access
function ProtectedRoute({ children, allowedRole }) {
  const { user } = useUser();

  if (!user) return <Navigate to="/auth" />;
  if (user.account_type !== allowedRole) return <Navigate to="/myaccount" />;

  return children;
}

// Select layout based on user role
function DashboardLayout() {
  const { user } = useUser();

  if (!user) return <Navigate to="/auth" />;

  return user.account_type === "teacher" ? (
    <TeacherLayout />
  ) : (
    <StudentLayout />
  );
}

// Select dashboard page based on user role
function DashboardPage() {
  const { user } = useUser();

  if (!user) return <Navigate to="/auth" />;

  return user.account_type === "teacher" ? <TeacherDash /> : <StudentDash />;
}

export default function Routing() {
  const { user } = useUser();

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/auth"
          element={!user ? <Auth /> : <Navigate to="/myaccount" />}
        />
      </Route>

      <Route path="/myaccount" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />

        <Route
          path="homework"
          element={
            <ProtectedRoute allowedRole="student">
              <div>Homework page</div> {/*Replace div with actual page component */}
            </ProtectedRoute>
          }
        />

        <Route
          path="schedule"
          element={
            <ProtectedRoute allowedRole="student">
              <div>Schedule Page</div> {/*Replace div with actual page component */}
            </ProtectedRoute>
          }
        />

        <Route
          path="mycourses"
          element={
            <ProtectedRoute allowedRole="teacher">
              <div>Courses page</div>
            </ProtectedRoute>
          }
        />

        <Route
          path="mystudents"
          element={
            <ProtectedRoute allowedRole="teacher">
              <div>Enrolled students page</div>
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
