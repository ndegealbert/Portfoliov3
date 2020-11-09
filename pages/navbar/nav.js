import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import React,{useState} from 'react';
import  styles from  '../../styles/nav.module.css'
import   { Link }   from  'react-scroll'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  app:{
      height:"60px",
      backgroundColor:'#1F1E2C',   
      marginBottom:theme.spacing(10)
  },
  name:{
    color: '#C4C1E7',

  }
}))
export default function Nav(){
const classes = useStyles();  
   return (
       <div>
      
        <AppBar className={classes.app} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
        
          </Typography>

    
            <div className={styles.links}>
              
           <Link style={{color:"#C4C1E7"}}  to="about" smooth={true}   offset={-80}  duration={1000}>About</Link >   
           <Link  style={{color:"#C4C1E7"}} to="project" smooth={true} offset={-80} duration={1000}>Project</Link >
           <Link  style={{color:"#C4C1E7"}} to="contact" smooth={true} offset={-80} duration={1000}>Contact</Link >  
              <a className={styles.re} href="https://portfolio-theta-black.vercel.app/public/resume.pdf" download>Resume</a>
            </div>          
          <IconButton  className={classes.menuButton} color="inherit" aria-label="menu">
         </IconButton>
      
        </Toolbar>
      </AppBar>
       </div>
   )

}

