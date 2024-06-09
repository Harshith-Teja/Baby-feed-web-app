import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons" 
import { useNavigate } from "react-router-dom";
import axios from '../api/axios'

export const Header = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
      await axios.get('/logout')
      navigate('/login')
  }

  return (
    <header className="bg-gradient-to-r from-indigo-400 to-cyan-400 shadow-2xl shadow-indigo-500/50 text-slate-100 text-4xl text-center p-4 relative">
      Baby Feed Web Application

      <span className="absolute inset-y-0 right-0 p-4">
      <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogout}/>
      </span>
    </header>
  );
};
