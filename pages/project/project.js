import  styles  from  './../../styles/project.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Link from  'next/link'
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";



const projects = [
  {
    id:1,
    title:"Realtime chat application",
    desc:"Building chat application using websocket users in the same room can  send and receive messages real-time  ",
    stack:["React","Node","socket.io "],
    giturl:'https://github.com/ndegealbert/Socket.io-Chat-application',
    link:'https://portfolio-m8vb242an.vercel.app/'
    

  },
  {
    id:2,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"],
    giturl:'https://github.com/ndegealbert/Socket.io-Chat-application',
    link:'https://portfolio-m8vb242an.vercel.app/'

  },

  {
    id:3,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"],
    giturl:'https://github.com/ndegealbert/Socket.io-Chat-application',
    link:'https://portfolio-m8vb242an.vercel.app/'


  },

  {
    id:4,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"],
    giturl:'https://github.com/ndegealbert/Socket.io-Chat-application',
    link:'https://portfolio-m8vb242an.vercel.app/'


  },

  {
    id:5,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"],
    giturl:'https://github.com/ndegealbert/Socket.io-Chat-application',
    link:'https://portfolio-m8vb242an.vercel.app/'


  },
  {
    id:5,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"],
    giturl:'https://github.com/ndegealbert/Socket.io-Chat-application',
    link:'https://portfolio-m8vb242an.vercel.app/'

  }
]

const useStyles = makeStyles(() =>
  createStyles({
    Button: {
      textTransform: "none",   
      color:'#a9a9b8',
    }
  })
);
export default function Project(){
  const classes = useStyles();
    return <div  id={"project"}>
        <h1 className={styles.projecth}>Projects</h1>
        <hr className={styles.hr2}/>
        <div className={styles.projects}>
          {
            projects.map(p => (
              <div key={p.id} className={styles.details}>
                <div className={styles.icon}> 
               <div  className={styles.linki}> 
                <div>
                <Button
                variant="link"
                target="_blank" 
                
                color="default"
                className={classes.Button}
                startIcon={<LinkIcon/>}
                href={p.link}
              />
               
                 </div>           
             
                  <Button
                variant="link"
                target="_blank" 
                color="default"
                className={classes.Button}
                startIcon={<GitHubIcon/>}
                href={p.giturl}
              />
              
                </div>
                </div>

                <h2 className={styles.title}> {p.title }</h2>
                <p className={styles.desc}>{p.desc} </p>
                <div className={styles.stack}> 
                 <ul className={styles.lan}>
                   {
                     p.stack.map(s=>( 
                     <li className={styles.lansta}>{s}</li>
                     ))
                   }
                 </ul>
                </div>
              
              </div>
            ))
          }
        </div>

    </div>
    
} 