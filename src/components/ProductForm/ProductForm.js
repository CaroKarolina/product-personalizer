import Button from "../Button/Button";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";

const ProductForm = props => {
  return(
    <div>
      <form onSubmit={props.handleSubmit}>
        <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
        <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
      </form>
    </div>
  )
}

export default ProductForm;