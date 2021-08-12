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
                    src="https://64.media.tumblr.com/b9529d9b7d78b9dec56bf2da2ccadc1f/3806d0fd9aa42779-16/s1280x1920/fed5733fe7861a45b52e7f41b08f362b9dc79c4f.png"
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
