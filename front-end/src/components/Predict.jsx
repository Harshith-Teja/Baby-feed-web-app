import React, { useRef, useState } from 'react'
import axios from '../api/axios'

export const Predict = () => {
  
  const symptoms = ['', 'itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain',
  'stomach_pain','acidity','ulcers_on_tongue','muscle_wasting','vomiting','burning_micturition','spotting_ urination','fatigue',
  'weight_gain','anxiety','cold_hands_and_feets','mood_swings','weight_loss','restlessness','lethargy','patches_in_throat',
  'irregular_sugar_level','cough','high_fever','sunken_eyes','breathlessness','sweating','dehydration','indigestion',
  'headache','yellowish_skin','dark_urine','nausea','loss_of_appetite','pain_behind_the_eyes','back_pain','constipation',
  'abdominal_pain','diarrhoea','mild_fever','yellow_urine','yellowing_of_eyes','acute_liver_failure','fluid_overload',
  'swelling_of_stomach','swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
  'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs','fast_heart_rate',
  'pain_during_bowel_movements','pain_in_anal_region','bloody_stool','irritation_in_anus','neck_pain','dizziness','cramps',
  'bruising','obesity','swollen_legs','swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
  'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips','slurred_speech','knee_pain','hip_joint_pain',
  'muscle_weakness','stiff_neck','swelling_joints','movement_stiffness','spinning_movements','loss_of_balance','unsteadiness','weakness_of_one_body_side',
  'loss_of_smell','bladder_discomfort','foul_smell_of urine','continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
  'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain','abnormal_menstruation','dischromic _patches',
  'watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum','rusty_sputum','lack_of_concentration','visual_disturbances',
  'receiving_blood_transfusion','receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen','history_of_alcohol_consumption',
  'fluid_overload','blood_in_sputum','prominent_veins_on_calf','palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
  'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose','yellow_crust_ooze'];

  const [symptom1, setSymptom1] = useState('');
  const [symptom2, setSymptom2] = useState('');
  const [symptom3, setSymptom3] = useState('');
  const [symptom4, setSymptom4] = useState('');
  const [symptom5, setSymptom5] = useState('');
  const [result, setResult] = useState('');
  const resRef = useRef();

  const handleOpts = (symptom, index) => {
    return <option key={index}>{symptom}</option>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //sending data to the backend
    if(!symptom1 && !symptom2 && !symptom3 && !symptom4 && !symptom5) {
      setResult('Please select the symptoms');
      resRef.current.focus();
      return;
    }

    try {
      const response = await axios.post('/predict', 
        JSON.stringify({symptom1, symptom2, symptom3, symptom4, symptom5}),
        {
          headers: { 'Content-Type' : 'application/json'},
          withCredentials: true
        });
        console.log(response.data);
        setResult(response.data);
        setSymptom1('');
        setSymptom2('');
        setSymptom3('');
        setSymptom4('');
        setSymptom5('');
    }catch(err) {
        console.log(err);
    }
  }

  return (
    <form className='w-full h-dvh flex flex-col sm:items-center sm:text-xl p-8' onSubmit={handleSubmit}>
        <h1>Select the symptoms</h1>
        
        <label htmlFor='symptom1' className='mt-2'>Symptom 1</label>
        <select id='symptom1' value={symptom1} onChange={(e) => setSymptom1(e.target.value)} className='w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950 text-center'>
          {symptoms.map(handleOpts)}
        </select>

        <label htmlFor='symptom2' className='mt-2'>Symptom 2</label>
        <select id='symptom2' value={symptom2} onChange={(e) => setSymptom2(e.target.value)} className='w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950 text-center'>
          {symptoms.map(handleOpts)}
        </select>

        <label htmlFor='symptom3' className='mt-2'>Symptom 3</label>
        <select id='symptom3' value={symptom3} onChange={(e) => setSymptom3(e.target.value)}  className='w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950 text-center'>
          {symptoms.map(handleOpts)}
        </select>
        <label htmlFor='symptom4' className='mt-2'>Symptom 4</label>
        <select id='symptom4' value={symptom4} onChange={(e) => setSymptom4(e.target.value)}  className='w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950 text-center'>
          {symptoms.map(handleOpts)}
        </select>

        <label htmlFor='symptom5' className='mt-2'>Symptom 5</label>
        <select id='symptom5' value={symptom5} onChange={(e) => setSymptom5(e.target.value)}  className='w-full sm:w-1/2 rounded-md p-1.5 my-2 border-2 border-gray-950 text-center'>
          {symptoms.map(handleOpts)}
        </select>

        <button type='submit' className='w-full sm:w-1/6 rounded-md p-1.5 my-6 border-2 bg-sky-600 text-slate-100 border-gray-950 text-center'>Submit</button>
        
        {result && <h1 ref={resRef} className='mt-4 text-red-500'>{result}</h1>}
        
    </form>
  )
}
