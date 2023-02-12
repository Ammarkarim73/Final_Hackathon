import { useState } from "react"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <>
      <div className="Signup_form">
        <div className="Signup_form_heading">
          <h1>SAYLANI WELFARE</h1>
          <p>ONLINE DISCOUNT STORE</p>
        </div>

        <div className="input-div one">
          <div className="i">
            <MarkunreadIcon className='form_icon' />
          </div>
          <div className="div">
            <input type="Email" className="input" placeholder=' Enter Email'
              value={email} onChange={(e) => {
                setEmail(e.target.value)
                console.log(e.target.value)
              }}
            />
          </div>
        </div>

        <div className="input-div one">
          <div className="i">
            <VisibilityOffIcon className='form_icon' />
          </div>
          <div className="div">
            <input type="password" className="input" placeholder='Enter Password'
              value={password} onChange={(e) => {
                setPassword(e.target.value)
                console.log(e.target.value)
              }}

            />
          </div>
        </div>
        <div className="get_Started_button_div">
          <button className='get_Started_button'> <Link to='/user/home/page' className='link'  > Sign In</Link> </button>
          <p className="already_account"> <Link to='/register' className='link_login' >Don't Have an account? Register</Link> </p></div>

      </div>
    </>
  )
}

export default Login
