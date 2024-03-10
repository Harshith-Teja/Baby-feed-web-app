import React from "react";

export const Footer = () => {
  const today = new Date();
  return (
    <footer className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-slate-100 text-xl text-center p-2">
      Copyright &copy; {today.getFullYear()}
    </footer>
  );
};
