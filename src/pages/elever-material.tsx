import Head from "next/head";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
