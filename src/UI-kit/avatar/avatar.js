import avatar from "../../images/icons/avatar.png"
import styles from "./avatar.module.css"

const Avatar = ({source}) => {
  const imgSource = source ? source : avatar

  return(
    <div className={styles.container}>
      <img className={styles.avatar} src={imgSource} />
    </div>
  )
} 

export default Avatar