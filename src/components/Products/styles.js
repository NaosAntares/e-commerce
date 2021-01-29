import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    textDecoration: 'none',
    paddingLeft: '18px',
    paddingRight: '18px',
    // padding: theme.spacing(3),s
    marginTop: '5vh',
  },

}));
