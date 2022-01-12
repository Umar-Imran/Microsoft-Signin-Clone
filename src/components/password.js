import React, { useState } from 'react'
import "../components/email.css";
import Card from '@mui/material/Card';
import { Grid, TextField, Typography, Button } from '@mui/material';
import Email from '../components/email';

const Password = () => {
    const [state, setstate] = useState(false)
    const clicked =()=> {
        setstate(true);
    }
    if(state){
        return <Email/>
    }

    return (
        <div className='login'>
            <Card variant="outlined">
                <Grid container rowSpacing={2} className='grid'>
                    <Grid item md={12} sm={12}>
                    <img src='https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ed9c9eb0dce17d752bedea6b5acda6d9.png'/>
                    </Grid>
                    <Grid item md={1} sm={1}>
                    <img onClick={clicked} style={{cursor:'pointer'}} src='https://aadcdn.msauth.net/shared/1.0/content/images/arrow_left_7cc096da6aa2dba3f81fcc1c8262157c.png'/>
                    </Grid>
                    <Grid item md={11} sm={11}>
                    <Typography style={{ fontSize: '15px' }}>sample@hotmail.com</Typography>
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <Typography variant='h5' style={{ fontWeight: 600 }} >Enter password</Typography>
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <TextField fullWidth autoFocus id="standard-basic" label="Password" variant="standard" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                    <a className='anchor' href='#' >Forget my password </a>
                    </Grid>
                    <Grid item md={8} sm={8}>
                    </Grid>
                    <Grid item md={3} sm={3}>
                    <Button fullWidth variant='contained'>Sign in</Button>
                    </Grid>
                </Grid>

            </Card>
        </div>
    )
}

export default Password
