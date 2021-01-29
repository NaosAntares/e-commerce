import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: '22.21vw',
    height: '63.5vh',
    borderRadius: 0,
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  // media: {
  //   flexShrink: '1',
  //   width: '100%',
  //   minHeight: '100%',
  // },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    position: 'absolute',
    top: '20px',
    left: '30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: 'calc(100% - 60px)'
  },
  cardPrice: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    overflow: 'hidden',
    marginTop: '14px'
  },
}));
