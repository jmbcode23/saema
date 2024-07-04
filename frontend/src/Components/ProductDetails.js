import { useParams } from "react-router-dom"

function ProductDetails() {
const {id} = useParams();

  return (
    <div>ProductDetails _ {id}</div>
  )
}

export default ProductDetails