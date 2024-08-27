
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { setUser } from '../redux/userSlice'


const Login = () => {

    const auth = getAuth()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [authing, setAuthing] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
      }, []);


    const signinWithGoogle = async () => {
        setAuthing(true)

        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid)
                navigate('/dashboar')
            })
            .catch(error => {
                console.log(error);
                setAuthing(false)
            })
    }

    const signinWithEmail = async () => {
        setAuthing(true)
        setError('')

        signInWithEmailAndPassword(auth, email, password)
            .then(response => {
                console.log('USER: ',response.user.email)
                dispatch(setUser(response.user.email));
                localStorage.setItem('user', JSON.stringify(response.user.email));
                navigate('/dashboar')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
                setAuthing(false)
                setEmail('')
                setPassword('')
            })
    }

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            signinWithEmail()
        }
    }

  return (
    <div className='w-full h-screen flex'>
        <div className='w-1/2 h-full flex flex-col bg-[#282c35] items-center justify-center'>
        </div>

        <div className='w-1/2 h-full flex flex-col bg-[#1a1a1a] p-20 items-center justify-center'>
            <div className='w-full flex flex-col max-w-[450px] mx-auto'>
                <div className='w-full flex flex-col mb-10 text-white'>
                    <h3 className='text-4xl font-bold mb-2'>Login</h3>
                    <p className='text-lg mb-4'>Welcome Back! Please enter your details.</p>
                </div>

                <div className='flex flex-col w-full mb-6'>
                    <input 
                        ref={inputRef}
                        className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={handleEnterPress} 
                    />
                </div>

                <div className='w-full flex flex-col mb-4'>
                    <button 
                        className='w-full bg-transparent border border-white text-white my-2 font-semibold rounded-md py-2'
                        onClick={() => signinWithEmail()}
                        disabled={authing}
                    >
                        Login With Email Or Password
                    </button>
                </div>

                {
                    error && 
                    <div className='text-red-500 mb-4'>
                        {error}
                    </div>
                }

                <div className='w-full flex items-center justify-center relative py-4'>
                    <div className='w-full h-[1px] bg-gray-500'></div>
                    <p className='text-lg absolute text-gray-500 bg-[#1a1a1a] px-2'>OR</p>
                </div>

                <button
                    className='w-full bg-white text-black font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer mt-7'              
                    onClick={() => signinWithGoogle()}
                    disabled={authing}
                >
                    Log In With Google
                </button>
            </div>

            <div className='w-full flex items-center justify-center mt-10'>
                <p className='text-sm font-normal text-gray-400'>Don't have an account? <span className='font-semibold text-white cursor-pointer underline'><a href='/signup'>Sign Up</a></span></p>
            </div>
        </div>
        
    </div>
  )
}

export default Login
