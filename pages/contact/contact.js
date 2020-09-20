import  styles  from  './../../styles/contact.module.css'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    Button: {
      textTransform: "none",   
      color:'#a9a9b8',
      
    }
  })
);

export default  function  Contact(){
  const classes = useStyles();
    const  date =  new Date()
    return  <div  id="contact">
          <div className={styles.contact}>
              <div className={styles.talk}>
                    <h1 className={styles.wanna}>Wanna talk?</h1>
                    <p className={styles.mind}> Have a cool project in mind, and think I can help you with it? <br/>
                  Feel free to e-mail me and I shall get back to you as early as possible.</p>

              </div>
                <div className={styles.rectangle2}> 
                  <p className={styles.box}> Get in Touch</p>
                </div>

                <div className={styles.touch}>
                      <ul className={styles.media1}>
                      <li className={styles.media}> 
                     
                      <Button
                      variant="link"
                      target="_blank" 
                      color="default"
                      className={classes.Button}
                      startIcon={ <TwitterIcon/> }
                      href="https://twitter.com/albertndege_"
                    />
                      
                       </li>  

                    <li className={styles.media}>                  
                      <Button
                      variant="link"
                      target="_blank" 
                      color="default"
                      className={classes.Button}
                      startIcon={<LinkedInIcon/>}
                      href="https://www.linkedin.com/in/ndege-albert-136178155/"
                    />
                    
                       </li>
      
                      </ul>
                   
                </div>
                <div className={styles.footer}>
                   <p> Designed & Built by Ndege Albert @{date.getFullYear()} </p>
                </div>
          </div>
            
    
    
    </div>
    
}