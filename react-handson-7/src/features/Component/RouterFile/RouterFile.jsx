import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import ContactUs from "../ContactUs";
import Student from "../Student";
import EditPg from "../EditPg";
import AddNewStudent from "../AddNewStudent";

const RouterFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/Contactus" element={<ContactUs />} />
      <Route path="/edit" element={<EditPg />} />
      <Route path="/addnewstudent" element={<AddNewStudent />} />
    </Routes>
  );
};

export default RouterFile;
