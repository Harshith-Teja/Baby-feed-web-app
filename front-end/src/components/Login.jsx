import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Login = () => {
    
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');

    const [errMsg, setErrMsg] = useState('');
    const [pwdVisibility, setPwdVisibility] = useState(true);

    useEffect(() => {
        userRef.current.focus();
    },[]);

    useEffect(() => {
        setErrMsg('');
    },[user, pwd]);

    const handleSubmit = (e) => {
        e.preventDefault();
        //connect to back end
    }

  return (
    <section className='bg-sky-400 w-full h-dvh flex justify-center items-center font-sans'>
        <div className='w-96 bg-slate-300 p-8 rounded-lg relative text-lg'>
            <p ref={errRef} aria-live="assertive" className={errMsg ? 'bg-slate-500 text-red-400 p-2 rounded-lg text-xl mb-2' : 'hidden'}>{errMsg}</p>
            <h1 className='text-4xl mb-8 text-center'>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="w-full">
                    Username:
                </label>
                <input 
                    className="w-full rounded-md p-1.5 my-2"
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete='off'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                /> 

                <label htmlFor="password" className="w-full">
                    Password:
                </label>
                <div className="relative">
                    <input 
                        className="w-full rounded-md p-1.5 my-2"
                        type={pwdVisibility ? "password" : "text"}
                        id="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        required
                    />
                    <FontAwesomeIcon icon={faEye} id="eye" className="absolute bottom-5 right-2 text-lg" onClick={() => setPwdVisibility(!pwdVisibility)}/>
                </div>

                <button className="w-full bg-blue-500 text-slate-200 p-2 rounded-xl mt-4 hover:scale-105 hover:bg-indigo-500 transition-all ease-in duration-300">
                    Sign In
                </button>
            </form>
            <p className="mt-3">
                New user? <br />
                <span className="underline">
                    <Link to='/register'>Sign Up</Link>
                </span>
            </p>
        </div>        
    </section>
  )
}
