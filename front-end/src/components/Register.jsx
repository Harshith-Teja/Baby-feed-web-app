import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faInfoCircle, faEye } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Register = () => {

    const userRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [pwdVisibility, setPwdVisibility] = useState(true);
    const [matchPwdVisibility, setMatchPwdVisibility] = useState(true);

    useEffect(() => {
        userRef.current.focus();
    },[]);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        setValidName(result);
    },[user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        const match = pwd === matchPwd;
        setValidPwd(result);
        setValidMatch(match);
    },[pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    },[user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //if btn is enabled via any JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2) {
            setErrMsg('Invalid Entry');
            return;
        }
        //connecting to the backend
        try {
            const response = await axios.post('/register',
                JSON.stringify({user,pwd}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response.data));
            setUser('');
            setPwd('');
            setMatchPwd('');
            navigate('/');
        }catch(err) {
            if(!err?.response) {
                setErrMsg('No server response');
            } else if(err.response?.status === 409) {
                setErrMsg('Username already exists');
            }
            else {
                setErrMsg('Registration failed');
            }
            errRef.current.focus();
        }
    }


  return (
    <section className='bg-sky-400 w-full h-dvh flex justify-center items-center font-sans'>
        <div className='w-96 bg-slate-300 p-8 rounded-lg relative text-lg'>
            <p ref={errRef} aria-live="assertive" className={errMsg ? 'bg-slate-500 text-red-400 p-2 rounded-lg text-xl mb-2' : 'hidden'}>{errMsg}</p>
            <h1 className='text-4xl mb-8 text-center'>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="w-full">
                    Username:
                    <span>
                        <FontAwesomeIcon icon={faCheck} className={validName ? 'text-[limegreen] ml-1' : 'hidden'} />
                        <FontAwesomeIcon icon={faTimes} className={validName || !user ? 'hidden' : 'text-[red] ml-1'} />
                    </span>
                </label>
                <input 
                    className="w-full rounded-md p-1.5 my-2"
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete='off'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    aria-invalid={!validName ? "true" : "false"}
                    aria-describedby="userNote"
                    /* required */
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />                
                <p id="userNote" className={!validName && user && userFocus ? 'bg-slate-900 text-blue-300 p-2 rounded-lg text-sm' : 'hidden'}>
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2"/>
                    4 to 24 characters <br />
                    Must begin with a letter <br /> 
                    Letters, numbers, underscores, hyphens are allowed
                </p>

                <label htmlFor="password" className="w-full">
                    Password:
                    <span>
                        <FontAwesomeIcon icon={faCheck} className={validPwd ? 'text-[limegreen] ml-1' : 'hidden'} />
                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? 'hidden' : 'text-[red] ml-1'} />
                    </span>
                </label>
                <div className="relative">
                    <input 
                        className="w-full rounded-md p-1.5 my-2"
                        type={pwdVisibility ? "password" : "text"}
                        id="password"
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        aria-invalid={!validPwd ? 'true' : 'false'}
                        aria-describedby="pwdNote"
                        /* required */
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <FontAwesomeIcon icon={faEye} className="absolute bottom-5 right-2 text-lg" onClick={() => setPwdVisibility(!pwdVisibility)}/>
                </div>
                <p id="pwdNote" className={!validPwd && pwd && pwdFocus ? 'bg-slate-900 text-blue-300 p-2 rounded-lg text-sm' : 'hidden'}>
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2"/>
                    8 to 24 characters <br />
                    Must begin with a letter <br /> 
                    Must include uppercase and lowercase letters, a number and a special character <br />
                    Allowed special characters:
                    <span aria-label="exclamation mark">!</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hashtag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                </p>

                <label htmlFor="confirmPwd" className="w-full">
                    Confirm Password:
                    <span>
                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? 'text-[limegreen] ml-1' : 'hidden'} />
                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? 'hidden' : 'text-[red] ml-1'} />
                    </span>
                </label>
                <div className="relative">
                    <input 
                        className="w-full rounded-md p-1.5 my-2"
                        type={matchPwdVisibility ? "password" : "text"}
                        id="confirmPwd"
                        value={matchPwd}
                        onChange={(e) => setMatchPwd(e.target.value)}
                        /* required */
                        aria-invalid={!validMatch ? 'true' : 'false'}
                        aria-describedby="confirmNote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <FontAwesomeIcon icon={faEye} className="absolute bottom-5 right-2 text-lg" onClick={() => setMatchPwdVisibility(!matchPwdVisibility)}/>
                </div>
                <p id="confirmNote" className={!validMatch && matchPwd && matchFocus ? 'bg-slate-900 text-blue-300 p-2 rounded-lg text-sm' : 'hidden'}>
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2"/>
                    Must match the first password input field
                </p>

                <button className="w-full bg-blue-500 text-slate-200 p-2 rounded-xl mt-4 hover:scale-105 hover:bg-indigo-500 transition-all ease-in duration-300">
                    Sign In
                </button>
            </form>
            <p className="mt-3">
                Already registered? <br />
                <span className="underline">
                    <Link to='/login'>Sign in</Link>
                </span>
            </p>
        </div>
    </section>
  )
}
