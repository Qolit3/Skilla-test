import styles from './call-rating.module.css';

const CallRating = ({grade}) => {
  let text = '';
  let divClass = styles.container;
  let textClass = styles.text;
  
  switch(grade) {
    case 'BAD':
      text = 'Плохо';
      divClass += ` ${styles.bad_container}`;
      textClass += ` ${styles.bad_text}`;
      break
    
    case 'GOOD':
      text = 'Хорошо';
      divClass += ` ${styles.good_container}`;
      textClass += ` ${styles.good_text}`;
      break

    case 'GREAT':
      text = 'Отлично';
      divClass += ` ${styles.great_container}`;
      textClass += ` ${styles.great_text}`;
      break

    default:
      break;
  }
  
  return (
    <div className={divClass}>
      <p className={textClass}>
        {text}
      </p>
    </div>
  );
}

export default CallRating;
