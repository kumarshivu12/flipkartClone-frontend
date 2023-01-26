import styled from '@emotion/styled'
import { Button, Dialog, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import {authenticateSignup,authenticateLogin} from '../../services/api'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataProvider'


const accountdetails={
    login:{
        view:"login",
        heading:"Login",
        subheading:"Get access to your orders, Wishlist and Recommendations"
    },
    signup:{
        view:"signup",
        heading:"Looks like you're new here!",
        subheading:"sign up with your mobile number to get started"

    }
}
//Style
const Component=styled(Box)`
height:77vh;
width:90vh;
overflow:hidden;
`
const Image=styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:80%;
width:35%;
padding:45px 35px;
&>p,&>h5{
    font-weight:600;
    color:white;
}
`
const Wrapper=styled(Box)`
display:flex:
flex-direction:column;
padding:25px 35px;
flex:1;
&>div,&>button,&>p{
    margin-top:20px;
}
`
const SignupWrapper=styled(Box)`
display:flex:
flex-direction:column;
padding:10px 35px;
flex:1;
&>div,&>button,&>p{
    margin-top:10px;
    width:100%;
}
`
const LoginButton=styled(Button)`
text-transform:none;
background:#FB641B;
color:white;
height:48px;
width:100%;
border-radius:2px;
`
const RequestButton=styled(Button)`
text-transform:none;
background:white;
color:#2874f0;
height:48px;
width:100%;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%)
`
const Text=styled(Typography)`
font-size:12px;
color:#878787;
`
const CreateButton=styled(Typography)`
font-size:14px;
font-weight:600;
color:#2874f0;
text-align:center;
cursor:pointer;
margintop:10px;
`
const Error=styled(Typography)`
font-size:12px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
text-align:center
`
const LoginDialog = (props) => {
    const [account,toggleAccount]=useState(accountdetails.login);
    const [firstname,setfirstname]=useState();
    const [lastname,setlastname]=useState();
    const [username,setusername]=useState();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const [phone,setphone]=useState();
    const {setAccount}=useContext(DataContext);
    const [loginusername,setloginusername]=useState();
    const [loginpassword,setloginpassword]=useState();
    const [error,setError]=useState(false);
    const handleClose=()=>{
        props.setOpen(false);
        toggleAccount(accountdetails.login);
        setError(false);
    }
    const continueHandler=async()=>{
        // console.warn(firstname,lastname,username,email,password,phone)
        let response= await authenticateSignup({firstname,lastname,username,email,password,phone})
        if(!response) return;
        localStorage.setItem('user',  JSON.stringify({firstname, lastname, username, email}))
        handleClose();
        setAccount(firstname)
    }
    // useEffect(()=>{
    //     cons
    // },[])
    const loginUser=async ()=>{
        // console.warn(loginusername,loginpassword);
        let response = await authenticateLogin({loginusername,loginpassword});
        console.warn(response)
        if(response.status===200){
            handleClose();
    
        localStorage.setItem('user',  JSON.stringify({firstname : response.data.firstname, lastname : response.data.lastname,username: response.data.username,email: response.data.email}))

            setAccount(response.data.firstname)
        }
        else{
            setError(true)
        }
    }
  return (
    <Dialog open={props.open} onClose={handleClose} PaperProps={{sx:{maxWidth:"unset"}}}> 
        <Component>
            <Box style={{display:"flex",height:"100%"}}>
                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{marginTop:20}}>{account.subheading}</Typography>
                </Image>
                { account.view==='login'?
                    <Wrapper>
                        <TextField variant='standard' label='Enter UserName' onChange={(e)=>setloginusername(e.target.value)} style={{width:"100%"}}/>
                        <TextField variant='standard' label='Enter Password' onChange={(e)=>setloginpassword(e.target.value)} style={{width:"100%"}}/>
                        {error && <Error>Enter valid login details!</Error>}
                        <Text>By continuing, you agree to Flipkart's Term of use and Privacy Policy.</Text>
                        <LoginButton onClick={loginUser} >Login</LoginButton>
                        <Typography style={{textAlign:"center"}}>OR</Typography>
                        <RequestButton >Request OTP</RequestButton>
                        <CreateButton onClick={()=>toggleAccount(accountdetails.signup)}>New to Flipkart?Create an account</CreateButton>
                    </Wrapper>
                    :
                    <SignupWrapper>
                        <TextField variant='standard' label='Enter FirstName'onChange={(e)=>setfirstname(e.target.value)}/>
                        <TextField variant='standard' label='Enter LastName'onChange={(e)=>setlastname(e.target.value)}/>
                        <TextField variant='standard' label='Enter UserName'onChange={(e)=>setusername(e.target.value)}/>
                        <TextField variant='standard' label='Enter Email'onChange={(e)=>setemail(e.target.value)}/>
                        <TextField variant='standard' label='Enter Password'onChange={(e)=>setpassword(e.target.value)}/>
                        <TextField variant='standard' label='Enter Phone'onChange={(e)=>setphone(e.target.value)}/>
                        <LoginButton onClick={continueHandler} >Continue</LoginButton>
                        <RequestButton onClick={()=>toggleAccount(accountdetails.login)}>Exsiting User? Login</RequestButton>
                    </SignupWrapper>
                }
            </Box>
        </Component>
    </Dialog>
  )
}

export default LoginDialog