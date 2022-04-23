import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {
  return(

    <div className={styles.sizes}>
      <ul className={styles.choices}>
        {props.sizes.map(size =>
            <li key={size.name}>
              <button  
                type="button" 
                className={clsx(size.name === props.currentSize && styles.active)}
                onClick={() => {
                  props.setCurrentSize(size.name)
                }}
              >{size.name}{props.children}
              </button>
            </li>
          )}
      </ul>
    </div>
  );
};

export default OptionSize;