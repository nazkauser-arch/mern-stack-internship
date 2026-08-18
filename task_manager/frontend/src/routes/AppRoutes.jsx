import {Routes, Route} from "react-router-dom"

import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage"
import TasksPage from "../pages/tasksPage"
import CreateTaskPage from "../pages/createTaskPage"
import TaskDetailsPage from "../pages/taskDetailsPage"
import EditTaskPage from "../pages/editTaskPage"
import NotFoundPage from "../pages/notFoundPage"

import ProtectedRoute from "./ProtectedRoute"

function AppRoutes() {
  return (
    <Routes>

      /* Public routes */

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/register"
        element={<RegisterPage />}
      />


      /* Protected routes */

      <Route
        path="/tasks"
        element={
          <ProtectedRoute>
            <TasksPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks/create"
        element={
          <ProtectedRoute>
            <CreateTaskPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks/:id"
        element={
          <ProtectedRoute>
            <TaskDetailsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/tasks/:id/edit"
        element={
          <ProtectedRoute>
            <EditTaskPage />
          </ProtectedRoute>
        }
      />

      {/* 404 */}

      <Route
        path="*"
        element={<NotFoundPage />}
      />

    </Routes>
  )
}

export default AppRoutes