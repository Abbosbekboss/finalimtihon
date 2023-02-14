import React, { useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


import style from './login.module.css';


function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const [inputErr, setInputErr] = useState(false);
    const [inputErr2, setInputErr2] = useState(false);


    useEffect(() => {
        const getLocal = JSON.parse(localStorage.getItem("key"))
        console.log(getLocal);
        if (getLocal === 1) {
            navigate('/admin')
        }
    }, [])
    

    function LoginFunc(evt) {
        evt.preventDefault();
        let data = {
            email: emailRef.current.value.trim(),
            password: passwordRef.current.value.trim(),
        }

        if (!data.email) {
            setInputErr(true)
            return;
        } else if (!data.password) {
            setInputErr2(true)
            return;
        }

        localStorage.setItem("key", '1');
        navigate('/admin')
    }
    function InputFunc() {
        setInputErr(false)
        setInputErr2(false)
    }
  return (
    <>
        <main className={style.login_main}>
        <form onSubmit={LoginFunc} className={style.login_form}>
                    <input
                        onChange={InputFunc}
                        ref={emailRef}
                        className={inputErr && style.inputError}
                        type="text"
                        placeholder='Your Email'
                    />
                    <input
                        onChange={InputFunc}
                        ref={passwordRef}
                        className={inputErr2 && style.inputError}
                        type="password"
                        placeholder='Your Password'
                    />
                    {inputErr && <span>Iltimos Malumotlarni toliq kiriting!</span>}
                    <button type='submit' className='modal_edit'>Add</button>
                </form>
        </main>
    </>
  )
}

export default Login;