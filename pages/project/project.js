import  styles  from  './../../styles/project.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
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
    title:"Quotify",
    desc:"Quotify is a small website made for you to find quotes from well known individuals around the world.",
    stack:["React","Json"],
    giturl:'https://github.com/ndegealbert/Quotify',
    link:'https://quotify.vercel.app/'
  },
  {
    id:3,
    title:"Watch List ",
    desc:" Use Movie DB API to fetch Popular, Upcoming and Now Showing Movies",
    stack:["Python","flask","MovieDb-Api"],
    giturl:'https://github.com/ndegealbert/watchList',
    link:'https://watch2movie.herokuapp.com/'

  },
  {
    id:4,
    title:"Portfolio v2",
    desc:"My Portfolio V2",
    stack:["HTML","Javascript","CSS"],
    giturl:'https://github.com/ndegealbert/portifolioV2',
    link:'https://ndegealbert.github.io/portifolioV2/'


  },
/** 
  {
    id:5,
    title:"Portfolio v3",
    desc:"My Portfolio V3",
    stack:["Material-ui","Next.js","sass"],
    giturl:'https://github.com/ndegealbert/portifolioV2',
    link:'https://ndegealbert.github.io/portifolioV2//'


  },*/

]

const useStyles = makeStyles((theme) =>
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
                     <li className={styles.lansta }>{s + ","}</li>
                     ))
                   }
                 </ul>
                </div>
              
              </div>
            ))
          }
        </div>
        </div>} 