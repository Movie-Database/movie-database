import React from "react";
import { Avatar, Grid,Paper, TextField, Button } from '@material-ui/core';

const SignUp=()=>{
  const paperStyle={padding:20,height:'75vh',width:350,margin:"20px auto"}
  
  const btnStyle= {margin:'8px 0px'}
  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align= 'center'>
        <Avatar/>
       <h2>Sign Up</h2> 
        </Grid>
        <TextField label='Firstname' placeholder='Enter your firstname' fullWidth required/>
        <TextField label='Lastname' placeholder='Enter your Lastname' fullWidth required/>
        <TextField label='Email' placeholder='Enter your email' fullWidth required/>
        <TextField label='Username' placeholder='Enter Username' fullWidth required/>
        <TextField label='Password' placeholder='Enter your password' type='password' fullWidth required/>
        <TextField label='Retype password' placeholder='Retype your password' type='password' fullWidth required/>
       
      <Button type='Submit' variant="contained" color='primary' style={btnStyle} fullWidth>Create Account</Button>
      <Button type='Submit' variant="contained" color='primary' style={btnStyle} fullWidth>Cancel</Button>
        </Paper>
    </Grid>
  )
}

export default SignUp;   
