import Button from "../Button/Button";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";

const ProductForm = props => {
    return(
        <form>
          <OptionColor />
          <OptionSize />
          <Button />  
        </form>
    )
}

export default ProductForm;