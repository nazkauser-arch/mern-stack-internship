import {Routes, Route} from "react-router-dom"

import LoginPage from "../pages/loginPage"
import RegisterPage from "../pages/registerPage"
import TasksPage from "../pages/tasksPage"
import CreateTaskPage from "../pages/createTaskPage"
import TaskDetailsPage from "../pages/taskDetailsPage"
import EditTaskPage from "../pages/editTaskPage"
import NotFoundPage from "../pages/notFoundPage"

function AppRoutes() {
    return (
    <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks/new" element={<CreateTaskPage />} />
        <Route path="/tasks/:id" element={<TaskDetailsPage />} />
        <Route path="/tasks/:id/edit" element={<EditTaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>

    )
}

export default AppRoutes