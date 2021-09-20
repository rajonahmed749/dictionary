import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { UserContext } from '../../App';
import googleIcon from '../../data/google-icon.svg';
import google from '../../data/google.svg'
import "./Login.css"

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL }
                setLoggedInUser(signedInUser)
                history.replace(from);
            }).catch((error) => {
                alert("sorry you have facing trouble!")
            });
    }

    return (
        <Container>
            <div className="login">
                <h3>Log in to see / add more word</h3>
                <span
                    style={{ cursor: 'pointer' }}
                    onClick={handleGoogle}
                    className="loginButton"
                >
                    <img id="googleIcon" src={googleIcon} alt="google icon" />&nbsp; login with Google
                </span>
            </div>
        </Container>
    );
};

export default Login;