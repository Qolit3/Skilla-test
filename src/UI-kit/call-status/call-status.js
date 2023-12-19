import incoming from '../../images/icons/incoming-call.png';
import outcoming from '../../images/icons/outcoming-call.png';
import miss from '../../images/icons/missed-call.png';
import no_answer from '../../images/icons/no-answer-call.png';
import styles from './call-status.module.css'

const CallStatus = ({status}) => {
  let imageSrc = '';

  switch (status) {
    case 'INCOMING':
      imageSrc = incoming;
      break
    
    case 'OUTCOMING':
      imageSrc = outcoming;
      break
    
    case 'MISSED':
      imageSrc = miss;
      break
    
    case 'NO_ANSWER':
      imageSrc = no_answer;
  }

  return (
    <div className={styles.container}>
      <img src={imageSrc} />
    </div>
  )
}

export default CallStatus