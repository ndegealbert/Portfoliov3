
import  styles  from  './../../styles/about.module.css'

export  default  function About (){
    return (
        <div  id="about"> 
         <h1 className={styles.about}>About Me </h1>
         <hr className={styles.hr}/>

         <p className={styles.intro}>  
            Hello! I'm Albert, a software engineer based in Kenya,
            I enjoy creating things that live on the internet, whether that be websites,
            applications, or anything in between.<br/>
             Here are a few technologies I've been working with recently:
         </p>
            <div className={styles.tech}>    
                 <div className="ui">
                 <ul className={styles.list} >
                    <li className={styles.li}>Javascript (es6+) & Typescript </li>
                    <li className={styles.li}>React & React-Native  </li>
                    <li className={styles.li}>Styled-Component</li>  
                    <li className={styles.li}>Node</li>       
                </ul>
                 </div>      
                 <div className="back">
                 <ul className={styles.list}> 
                    <li className={styles.li}>Python</li>
                    <li className={styles.li}>Django </li>
                    <li className={styles.li}>PostgreSQL</li>
                    <li className={styles.li}>Docker</li>
                </ul>

                 </div>
               
            </div>
        
        
        </div>
    )
}