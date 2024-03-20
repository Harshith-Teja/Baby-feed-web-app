import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = ({ reqType, setReqType }) => {
  
  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-700 shadow-2xl shadow-blue-500/50 text-white p-3 sm:text-xl">
      <ul className="grid grid-rows-2 grid-flow-col gap-2 sm:flex justify-around">
        <Link to="/questionnaire">
          <li
            className={
              reqType == "Questionnaire"
                ? "bg-white text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
                : "hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
            }
            onClick={() => setReqType("Questionnaire")}
          >
            Questionnaire
          </li>
        </Link>

        <Link to="/results">
          <li
            className={
              reqType == "Results"
                ? "bg-white text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
                : "hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
            }
            onClick={() => setReqType("Results")}
          >
            Results
          </li>
        </Link>

        <Link to="/recommendations">
          <li
            className={
              reqType == "Recommendations"
                ? "bg-white text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
                : "hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
            }
            onClick={() => setReqType("Recommendations")}
          >
            Recommendations
          </li>
        </Link>

        <Link to="/predict">
          <li
            className={
              reqType == "Predict Disease"
                ? "bg-white text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
                : "hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
            }
            onClick={() => setReqType("Predict Disease")}
          >
            Predict Disease
          </li>
        </Link>

        <Link to="/appointment">
          <li
            className={
              reqType == "Doctor's Appointment"
                ? "bg-white text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
                : "hover:bg-white hover:text-slate-600 sm:p-1 md:px-4 md:py-1 rounded-lg"
            }
            onClick={() => setReqType("Doctor's Appointment")}
          >
            Doctor's Appointment
          </li>
        </Link>
      </ul>
    </nav>
  );
};
