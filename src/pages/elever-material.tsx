import Head from "next/head";
import Button from "@material-ui/core/Button";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

export default function () {
  return (
    <div className="container">
      <Head>
        <title>dothemath.se</title>
      </Head>
     
      <Container component="main" maxWidth="xs" style={{ backgroundColor: "#cfe8fc" }}>
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box my={1}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
          Få hjälp med skolan av Universitetsstudenter <br />
          Tryck här för att gå med
          <br /></Box>
          <Button variant="contained" color="primary">
            GÅ MED I SLACK
          </Button>
          <br />
          Är det fortfarande lite oklart? <br />
          Ingen fara, tryck på knappen nedan för att se en guide för hur du kan
          gå med. <br />
          <Button variant="contained" color="secondary">
            LADDA NED GUIDE
          </Button>
          <br />
        </Container>
    </div>
  );
}
