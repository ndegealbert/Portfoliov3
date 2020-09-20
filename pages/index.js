import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import About  from './about/about'
import  Project  from './project/project'
import  Contact from './contact/contact'
import  Header from  './header/header'
import  Picture from  './picture/picture'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:theme.spacing(5),
    backgroundColor:'#1F1E2C',   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>    
     <Grid item xs={12}>
           <Header/>       
        </Grid>

        <Grid item xs={12} sm={6}>
         <About/>     
        </Grid>
        <Grid item xs={12} sm={6}>
      
        </Grid>
        <Grid item  sm={12}>
        <Project/>
        <Contact/>
        </Grid>

        </Grid>

  
  )
}
