import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
// import ProductForm from '../ProductForm/ProductForm';
// import { cleanup } from '@testing-library/react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const price = useMemo(()=>{
    const correctSize = props.sizes.find((size)=> size.name === currentSize);
    return props.basePrice + correctSize.additionalPrice
  }, [currentSize, props.sizes]);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{'Price: ' + price + ' $'}</span>
        </header>
        <form>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <OptionSize sizes={props.sizes} setCurrentSize={setCurrentSize} currentSize={currentSize} />
          <h3 className={styles.optionLabel}>Colors</h3>
          <OptionColor colors={props.colors} setCurrentColor={setCurrentColor} currentColor={currentColor} />
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;