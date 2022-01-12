import React, { useState } from 'react'
import "../components/email.css";
import Card from '@mui/material/Card';
import { Grid, TextField, Typography, Button } from '@mui/material';
import Password from '../components/password';

const Email = () => {
    const [state, setstate] = useState(false)

    const clicked =()=> {
        setstate(true);
    }
    if(state){
        return <Password/>
    }

    return (
        <div className='login'>
            <Card variant="outlined">
                <Grid container rowSpacing={2} className='grid'>
                    <Grid item md={12} sm={12}>
                    <img src='https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png'/>
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <Typography variant='h5' style={{ fontWeight: 600 }} >Sign in</Typography>
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <TextField fullWidth autoFocus id="standard-basic" label="Email, phone, or Skype" variant="standard" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <Typography style={{fontSize:'13px'}} >No account? <a className='anchor' href='#' >Create one!</a></Typography>
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <a className='anchor' href='#' >Sign in with a security key <img src='https://logincdn.msauth.net/shared/1.0/content/images/documentation_9628e22a6bfb1edc59e81064a666b614.png'/></a>
                    </Grid>
                    <Grid item md={8} sm={8}>
                    </Grid>
                    <Grid item md={3} sm={3}>
                    <Button fullWidth variant='contained' onClick={clicked}>NEXT</Button>
                    </Grid>
                </Grid>

            </Card>

            <Card variant="outlined" className='card'>
            <Grid container className='grid1'>
            <Grid item md={1} sm={1}>
            <img className='img1' src='https://logincdn.msauth.net/shared/1.0/content/images/signin-options_4e48046ce74f4b89d45037c90576bfac.svg'/>
            </Grid>
                <Grid item md={11} sm={11}>
                    <Typography style={{fontSize:'15px', paddingLeft:'5px', color:'grey'}}>Sign-in options</Typography>
                </Grid>
            </Grid>

            </Card>


        </div>
    )
}

export default Email
