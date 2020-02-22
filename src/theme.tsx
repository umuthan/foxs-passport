import { createMuiTheme,
         makeStyles } from '@material-ui/core';
import 'typeface-roboto';

// A custom theme for this app
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FA903A',
    },
    secondary: {
      main: '#4D4243',
    },
    background: {
      default: '#fff',
    },
  },
});

const drawerWidth = 240;

export const styles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  dialogMap: {
    width: '100%',
    height: '50vh'
  },
  passport: {
    borderRadius: 7,
    borderWidth: 4,
    borderColor: '#294468',
    borderStyle: 'solid'
  },
  passportPaper: {
    background: '#F6F2E5',
    height: '75vh',
    [theme.breakpoints.down('xs')]: {
      height: '37.5vh',
    },
    padding: 20,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    cursor: 'pointer'
  },
  passportCover: {
    background: '#294468',
    height: '75vh',
    borderRadius: 7,
    textAlign: 'center',
    cursor: 'pointer',
    color: '#FFCC80',
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  },
  passportCoverHeading: {
    height: '30%'
  },
  passportCoverLogo: {
    height: '70%'
  },
  passportMap: {
    height: '35%',
    width: '100%'
  },
  passportInfo: {
    height: '65%',
    overflow: 'scroll'
  }
}));
