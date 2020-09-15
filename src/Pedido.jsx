import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import TabletAndroidIcon from '@material-ui/icons/TabletAndroid';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '10px',
    padding: '8px',
    fontSize: '14pt',
    fontWeight: 'bold',
    fontFamily: 'Roboto, Arial',
  },
  importado: {
    backgroundColor: theme.palette.success.light,
  },
  pendente: {
    backgroundColor: theme.palette.error.dark,
  },
  flexGrid: {
    display: 'flex',
  },
}));

const Pedido = ({ vendedor, data, status }) => {
  const classes = useStyles();
  return (
    <Grid item sm={12}>
      <Paper
        elevation={2}
        className={`${classes.paper} ${
          status === 'ok' ? classes.importado : classes.pendente
        }`}
      >
        <Container>
          <Grid item sm={6} className={classes.flexGrid}>
            <TabletAndroidIcon />
            <span>{`Vendedor: ${vendedor}`}</span>
          </Grid>
          <Grid item sm={6} className={classes.flexGrid}>
            <EventIcon />
            <span>{`Data de envio: ${data}`}</span>
          </Grid>
        </Container>
      </Paper>
    </Grid>
  );
};

export default Pedido;
