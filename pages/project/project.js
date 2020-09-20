import  styles  from  './../../styles/project.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import Link from  'next/link'
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";


const projects=[
  {
    id:1,
    title:"Realtime chat application",
    desc:"Building chat application using websocket users in the same room can  send and receive messages real-time  ",
    stack:["React","Node","socket.io "],
    giturl:'https://github.com/ndegealbert/Socket.io-Chat-application',
    link:'https://socket-io-chat-application.vercel.app/'
    

  },
  {
    id:2,
    title:"Watch List ",
    desc:" Use Movie DB API to fetch Popular, Upcoming and Now Showing Movies",
    stack:["Python","flask","MovieDb-Api"],
    giturl:'https://github.com/ndegealbert/watchList',
    link:'https://watch2movie.herokuapp.com/'

  },

  {
    id:3,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"],
    giturl:'https://github.com/ndegealbert/Socket.io-Chat-application',
    link:'https://watch2movie.herokuapp.com/'


  },

  {
    id:4,
    title:"Portfoliov2",
    desc:"My Portfolio V2",
    stack:["HTML","Javascript","CSs"],
    giturl:'https://github.com/ndegealbert/portifolioV2',
    link:'https://ndegealbert.github.io/portifolioV2//'


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

const useStyles = makeStyles((theme) =>
  createStyles({
    Button: {
      textTransform: "none",     
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