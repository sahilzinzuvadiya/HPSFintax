
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* AUTH */
import Login from "./Pages/Login";
import ChangePassword from "./Pages/ChangePassword";

/* DASHBOARD LAYOUTS */
import Admin from "./Dashboards/Admin";
import Employee from "./Dashboards/Employee";
import Client from "./Dashboards/Client";

/* ADMIN DASHBOARD + PAGES */
import AdminDashboard from "./Dashboards/AdminDashboard";
import CreateEmployee from "./Pages/CreateEmployee";
import CreateClient from "./Pages/CreateClient";
import ClientRequest from "./Pages/ClientRequest";
import GetClient from "./Dashboards/GetClient";
import GetEmployee from "./Dashboards/GetEmployee";
import EmployeeWork from "./Pages/EmployeeWork";

/* EMPLOYEE DASHBOARD + PAGES */
import EmployeeDashboard from "./Dashboards/EmployeeDashboard";
import EmployeeCreateClient from "./Pages/EmployeeCreateClient";
import EmployeeMyClient from "./Pages/EmployeeMyclient";
import EmployeeClientWork from "./Pages/EmployeeClientWork";

/* CLIENT DASHBOARD */
import ClientDashboard from "./Dashboards/ClientDashboard";

/* TOAST */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>

      {/* ================= TOAST ================= */}
      <ToastContainer
        position="right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />

      <Routes>
        {/* ================= AUTH ================= */}
        <Route path="/" element={<Login />} />
        <Route path="/change-password" element={<ChangePassword />} />

        {/* ================= ADMIN ================= */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="clients" element={<GetClient />} />
          <Route path="clients/:clientId" element={<EmployeeClientWork />} />
          <Route path="employee" element={<GetEmployee />} />
          <Route path="employee-work" element={<EmployeeWork />} />
          <Route path="create-employee" element={<CreateEmployee />} />
          <Route path="create-client" element={<CreateClient />} />
          <Route path="client-requests" element={<ClientRequest />} />
        </Route>

        {/* ================= EMPLOYEE ================= */}
        <Route path="/employee" element={<Employee />}>
          <Route index element={<EmployeeDashboard />} />
          <Route path="clients" element={<EmployeeMyClient />} />
          <Route path="clients/:clientId" element={<EmployeeClientWork />} />
          <Route path="create-client" element={<EmployeeCreateClient />} />
        </Route>

        {/* ================= CLIENT ================= */}

        <Route path="/client" element={<Client />}>
          {/* DASHBOARD */}
          <Route index element={<ClientDashboard />} />

          {/* SERVICE STEP (NO ELEMENT NEEDED) */}
          <Route
            path="service/:serviceKey/step/:stepKey"
            element={<ClientDashboard />}
          />
        </Route>


      </Routes>
    </BrowserRouter>
  );
}
