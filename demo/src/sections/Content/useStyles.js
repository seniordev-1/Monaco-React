import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: 5,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,    
  },
  editor: {
    height: '85vh',
  },
  diffEditor: {
    height: '85vh',
  }
}));

export default useStyles;