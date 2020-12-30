import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
    borderRadius: 0,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardPrice: {
    display: 'flex',
    justifyContent: 'center',
  },
}));