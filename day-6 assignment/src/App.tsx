import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DisplayUsers from "./components/DisplayUsers";
import EditStudent from "./components/EditStudent";
import PageNotFound from "./components/PageNotfound";
import UserRegistration from "./components/UserRegistration";

const App = () => {
  return (
    <>
    <main className="container-fluid">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/" element={<Navigate to="/student" />} />
            <Route path="/student" element={<DisplayUsers />} />
            <Route path="/student/add" element={<UserRegistration />} />
            <Route path="/student/edit/:id" element={<EditStudent />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </main>
    
    </>
  );
};

export default App;
