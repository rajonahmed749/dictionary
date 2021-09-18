import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { UserContext } from '../../App';

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
                // history.replace(from);
                console.log(signedInUser);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
                console.log(errorCode, errorMessage, email, credential);
            });
    }


    return (
        <Container >
            <i onClick={handleGoogle} className="fab fa-google"></i>
        </Container>
    );
};

export default Login;