import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  importado: {
    backgroundColor: theme.palette.success.light,
  },
  pendente: {
    backgroundColor: theme.palette.error.dark,
  },
  paper: {
    padding: '10px',
    marginBottom: '10px',
  },
}));

export default function Ajuda({ fechar }) {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
    fechar();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Visualizador de Status dos Pedidos'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Paper className={`${classes.importado} ${classes.paper}`}>
              Pedido enviado e importado pelo Active
            </Paper>
            <Paper className={`${classes.pendente} ${classes.paper}`}>
              Pedido enviado aguardando importação pelo Active
            </Paper>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Entendi
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
