import React from 'react';
import { Container, Grid } from '@material-ui/core';
import AddWord from './AddWord';

const Profile = () => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <h4>one</h4>
                    </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <AddWord/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <h4>one</h4>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;