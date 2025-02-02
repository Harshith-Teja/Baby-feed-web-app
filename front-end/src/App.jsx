import { Appointment } from "./components/Appointment";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Login } from "./components/Login";
import { Predict } from "./components/Predict";
import { Questionnaire } from "./components/Questionnaire";
import { Recommendations } from "./components/Recommendations";
import { Results } from "./components/Results";
import { Register } from "./components/Register";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [timesFeeded, setTimesFeeded] = useState("");
  const [reqType, setReqType] = useState("");

  return (
    <div className="w-full h-dvh flex">
      <Routes>
        <Route
          path="/"
          element={<Layout reqType={reqType} setReqType={setReqType} />}
        >
          <Route index element={<Home />} />
          <Route
            path="/questionnaire"
            element={
              <Questionnaire
                name={name}
                age={age}
                weight={weight}
                timesFeeded={timesFeeded}
                setName={setName}
                setAge={setAge}
                setWeight={setWeight}
                setTimesFeeded={setTimesFeeded}
                setReqType={setReqType}
              />
            }
          />
          <Route
            path="/results"
            element={
              <Results
                name={name}
                age={age}
                weight={weight}
                timesFeeded={timesFeeded}
                setReqType={setReqType}
              />
            }
          />
          <Route
            path="/recommendations"
            element={
              <Recommendations
                name={name}
                age={age}
                weight={weight}
                timesFeeded={timesFeeded}
              />
            }
          />
          <Route path="/predict" element={<Predict />} />
          <Route path="/appointment" element={<Appointment />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
