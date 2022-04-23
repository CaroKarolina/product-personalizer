import styles from './ProductImage.module.scss';

const ProductImage = props => {
    console.log('color', props);
    return(
        <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.name}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`} />
      </div>
    );
};

export default ProductImage;

