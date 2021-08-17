import React from "react";
import { Avatar, Grid,Paper, TextField, Checkbox, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const Login=()=>{
  const paperStyle={padding:20,height:'70vh',width:350,margin:"20px auto"}
  const preventDefault = (event) => event.preventDefault();
  const btnStyle= {margin:'8px 0px'}
  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align= 'center'>
        <Avatar/>
       <h2>Sign In</h2> 
        </Grid>
        <TextField label='Username' placeholder='Enter Username' fullWidth required/>
        <TextField label='Password' placeholder='Enter your password' type='password' fullWidth required/>
        <FormControlLabel 
        control={
          <Checkbox 
            name="checkedB"
            color="primary"
             />
        }
        label="Remember me"
      />
      <Button type='Submit' variant="contained" color='primary' style={btnStyle} fullWidth>Sign in</Button>
      <Typography>
      <Link href="#" onClick={preventDefault}>
    Forgot Password?
  </Link>
      </Typography>
      <Typography>New User?
      <Link href="#" onClick={preventDefault}>
    Create Acount!
  </Link>
      </Typography>
        </Paper>
    </Grid>
  )
}

export default Login;   
