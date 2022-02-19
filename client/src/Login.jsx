import './login.css'
import React,{ useState} from 'react'
import Axios from 'axios'

function Login()
{
    const [username123, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [newuser, setnewuser] = useState("")
    const [newpwd, setnewpwd] = useState("")
    const [confirm, setconfirm] = useState("")

    const gotologin = () =>
    {
        document.getElementById("form_sign").style.display='none';
        document.getElementById("login").style.backgroundColor = 'rgba(214, 0, 0, 0.1)';
        document.getElementById("signup").style.backgroundColor = 'rgba(214, 0, 0, 0.56)';
        document.getElementById("form_log").style.display='block';
    }
    const gotosignin = () =>
    {
        document.getElementById("form_log").style.display = "none";
        document.getElementById("signup").style.backgroundColor = 'rgba(214, 0, 0, 0.1)';
        document.getElementById("login").style.backgroundColor = 'rgba(214, 0, 0, 0.56)';
        document.getElementById("form_sign").style.display='block';

    }

    const login =async ()=> {
        Axios.post("http://localhost:8044/login", {
            uname:username123,
            pwd:password
        }).then((response)=>{
            const valid = response.data.msg
            if(valid === "true")
                alert("login successful")
            else if(valid === "false")
                alert("password incorrect")
            else if(valid === "no_user")
                alert("The username is not correct")
        })
    }
    const signin =()=> {
        if(newpwd!==confirm)
        {
            alert('The passwords are not matching');
            return;
        }
 
        Axios.post("http://localhost:8044/signin", {
            name:newuser,
            password:newpwd,
        });
    }

    

    return(
        <div id = "login-box">
            <button id='login' onClick = {gotologin}>Log in</button>
            <button id='signup' onClick = {gotosignin}>Sign up</button>
            <br></br>
            <div id = "form_log">
                <label className='label1'>Username:</label> 
                <input type="text" placeholder='username'
                    onChange={(event) =>{
                        setusername(event.target.value)
                    }}
                />
                    
                <label className='label2'>Password:</label> 
                <input type="password" placeholder='password'
                    onChange={(event) =>{
                        setpassword(event.target.value)
                    }}
                /> 
                <button onClick={login} id='submit'>Login</button>
            </div>
            <div id = "form_sign" display = "none">
                <label className='label3'>Username:</label> 
                <input type="text" placeholder='enter your username' 
                    onChange={(event) =>{
                        setnewuser(event.target.value)
                    }}
                />
                    
                <label className='label2'>Password:</label> 
                <input type="password" placeholder='enter your password' 
                    onChange={(event) =>{
                        setnewpwd(event.target.value)
                    }}
                />
                <label className='label5'>Confirm password:</label>
                <input id = "confirm" type="password" placeholder='enter your password again' 
                    onChange={(event) =>{
                        setconfirm(event.target.value)
                    }}
                /> 
                <button onClick ={signin} id='submit'>Sign In</button>
            </div>
        </div>
    )
}

export default Login;