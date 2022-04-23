import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {

  const prepareColorClassName = color => {
    console.log(prepareColorClassName);
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <div  className={styles.colors}>
        <ul className={styles.choices}>
        {props.colors.map (color =>
            <li key={color}>
              <button 
                  type="button"
                  className={clsx(prepareColorClassName(color), props.currentColor === color && styles.active)}
                  onClick={() => {
                  props.setCurrentColor(color)
                  }}
              >
              </button>
            </li>
        )}
        </ul>
    </div>
  );
};
export default OptionColor;