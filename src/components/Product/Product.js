import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import Button from '../Button/Button';
// import { cleanup } from '@testing-library/react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const price = useMemo(() => {
    const correctSize = props.sizes.find((size)=> size.name === currentSize);
    return props.basePrice + correctSize.additionalPrice
  }, [currentSize, props.sizes, props.basePrice]);

  const handleSubmit = e => {
    console.log('your choice :')
    console.log('name :', props.name)
    console.log('price :', price);
    console.log('color :', currentColor);
    console.log('size :', currentSize)
    e.preventDefault();
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{'Price: ' + price + ' $'}</span>
        </header>
        <ProductForm key={props.id} sizes={props.sizes} colors={props.colors} currentSize={currentSize}
        setCurrentSize={setCurrentSize} currentColor={currentColor} setCurrentColor={setCurrentColor} handleSubmit={handleSubmit} />
        <Button className={styles.button} onClick={handleSubmit} />
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