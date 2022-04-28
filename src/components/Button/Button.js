import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = props => {
    return (
    <button className={clsx(styles.button, props.className)} onClick={props.onClick}>{props.children}
        <span className="fa fa-shopping-cart" />
    </button>);
};

export default Button;