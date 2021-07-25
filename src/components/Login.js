import React from 'react';
import { LoginContainer, LoginInnerContainer } from './Login.styles';
import { Button } from "@material-ui/core";
import { auth, provider } from '../firebase';

function Login() {

    const signIn = e => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => 
        alert(error.message));
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img 
                    src="https://ih1.redbubble.net/image.1641479581.5101/st,small,507x507-pad,600x600,f8f8f8.jpg"
                    alt=""
                />

                <h1>Sign in to Send Messages</h1>
                <p>message sending + channels, ala discord, slack</p>

                <Button type="submit" onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login
