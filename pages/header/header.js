import  styles from  './../../styles/header.module.css'


export default  function Header(){
    return (
        <div className={styles.header}>
            <div  className={styles.content}>
                <p className={styles.hi}> Hi, my name is </p>
                 <h2 className={styles.name}>Ndege Albert.<br/> I build things for the web.</h2>
                <p className={styles.who}>  
                I'm a software developer, based in Nairobi Kenya<br/>
                Tech enthusiast who believes in human potential
                and its great impact on the world  I'm into inspired self-taught learning.<br/>
                I like Open-source culture I preach programming
                and build cool things using codes
                </p>
                <div className={styles.rectangle1}> 
                <p className={styles.box}> <a className={styles.hr} href="mailto:albertndege2@gmail.com" > Get in touch</a></p>
                </div>
            </div>
        </div>
    )
}