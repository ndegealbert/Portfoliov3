import  styles  from  './../../styles/project.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const projects = [
  {
    id:1,
    title:"Realtime chat application",
    desc:"Building chat application using websocket users in the same room can  send and receive messages real-time  ",
    stack:["React","Node","socket.io "]
    

  },
  {
    id:2,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"]

  },

  {
    id:3,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"]


  },

  {
    id:4,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"]


  },

  {
    id:5,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"]


  },
  {
    id:5,
    title:"Albert",
    desc:"Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality",
    stack:["React","React-native","python"]

  }
]

export default function Project(){
    return <div  id={"project"}>
        <h1 className={styles.projecth}>Projects</h1>
        <hr className={styles.hr2}/>
        <div className={styles.projects}>
          {
            projects.map(p => (
              <div key={p.id} className={styles.details}>
                <div className={styles.icon}> 
               <div  className={styles.linki}> 
               <LinkIcon/>
                </div>
                <GitHubIcon/> 
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