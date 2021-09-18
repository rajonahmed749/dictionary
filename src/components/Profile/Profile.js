import React from 'react';
import { Container, Grid } from '@material-ui/core';
import AddWord from './AddWord';

const Profile = () => {

    return (
        <Container >
            <Grid container spacing={2} direction="column"
                alignItems="center"
                justify="center">
                <Grid item xs={12} sm={6} md={2}>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <AddWord />
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;