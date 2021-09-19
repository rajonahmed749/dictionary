import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { UserContext } from '../../App';
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
                console.log(result.user)
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, img: photoURL }
                setLoggedInUser(signedInUser)
                // storeAuthToken();
                history.replace(from);
                console.log(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }

    // const storeAuthToken = () => {
    //     firebase.auth().currentUser.getIdToken(true)
    //         .then(function (idToken) {
    //             sessionStorage.setItem('token', idToken);
    //             history.replace(from);
    //             console.log(idToken)
    //         }).catch(function (error) {
    //             console.log(error)
    //         });
    // }

    return (
        <Container>
            <div className="login">
                <h3>Log in to see / add more word</h3>
                <span
                    style={{ cursor: 'pointer' }}
                    onClick={handleGoogle}
                     className="loginButton"
                ><i className="fab fa-google"></i>oogle Login
                    </span>
            </div>
        </Container>
    );
};

export default Login;