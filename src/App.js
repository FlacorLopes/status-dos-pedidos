import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Container } from '@material-ui/core';
import Pedido from './Pedido';
import LoopIcon from '@material-ui/icons/Loop';
import './animation.css';
import logo from './img/logo.png';
import Fab from '@material-ui/core/Fab';
import HelpIcon from '@material-ui/icons/Help';
import Ajuda from './Ajuda';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(10),
  },
  header: {
    backgroundColor: theme.palette.info.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  carregando: {
    fontSize: '8rem',
    color: theme.palette.info.dark,
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  help: {
    backgroundColor: theme.palette.info.main,
    fontSize: '2rem',
    position: 'fixed',
    marginTop: '70vh',
  },
  rightCollumn: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function App() {
  const classes = useStyles();
  const [pedidos, setPedidos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [ajudaAberta, setAjudaAberta] = useState(false);

  const fecharAjuda = () => {
    setAjudaAberta(false);
  };

  useEffect(() => {
    if (pedidos.length !== 0) return;

    async function getFtpData() {
      const response = await fetch('/api');
      const json = await response.json();
      setPedidos(json);
      setCarregando(false);
    }
    getFtpData();
  }, [pedidos]);

  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <header className={classes.root}>
            <AppBar position="fixed" className={classes.header}>
              <Toolbar>
                <Typography variant="h5" className={classes.title}>
                  STATUS DOS PEDIDOS
                </Typography>
                <a
                  href="http://activesystem.net.br/suporte"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} alt="Logo" />
                </a>
              </Toolbar>
            </AppBar>
          </header>
        </Grid>
        <Grid container item>
          <Grid item xs={0} sm={2} />
          {/*grid central - para conteúdo*/}
          <Grid item xs={12} sm={8}>
            {!carregando &&
              pedidos.map((p) => {
                const dataStr = new Date(p.data).toLocaleString();

                return (
                  <Pedido
                    key={p.data + p.vendedor}
                    status={p.status}
                    vendedor={p.vendedor}
                    data={dataStr}
                  />
                );
              })}
            {carregando && (
              <Container className={`${classes.center}`}>
                <LoopIcon
                  color="primary"
                  fontSize="large"
                  className={classes.carregando + ' loader'}
                />
              </Container>
            )}
            {ajudaAberta && <Ajuda fechar={fecharAjuda} />}
          </Grid>
          {/* fim grid central - para conteúdo*/}
          <Grid item xs={0} sm={2} className={classes.rightCollumn}>
            <Fab
              className={classes.help}
              aria-label="help"
              onClick={() => setAjudaAberta(true)}
            >
              <HelpIcon />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
