import { Appointment } from "./components/Appointment"
import { Home } from "./components/Home"
import { Layout } from "./components/Layout"
import { Login } from "./components/Login"
import { Predict } from "./components/Predict"
import { Questionnaire } from "./components/Questionnaire"
import { Recommendations } from "./components/Recommendations"
import { Results } from "./components/Results"
import { Register } from "./components/Register"
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="w-full h-dvh flex">
        <Routes>
            <Route path="/" element={<Layout/>}>
              
              <Route index element={<Home/>}/>
              <Route path="/questionnaire" element={<Questionnaire/>}/>
              <Route path="/results" element={<Results/>}/>
              <Route path="/recommendations" element={<Recommendations/>}/>
              <Route path="/predict" element={<Predict/>}/>
              <Route path="/appointment" element={<Appointment/>}/>

            </Route>

            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
              
        </Routes>
    </div>
    
  )
}

export default App
