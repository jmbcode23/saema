import { useState } from "react";
import { Button, message } from "antd";
import { addToCart } from "../Api";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";
import { addItemToCart } from "../redux/cartSlice";


function AddToCartButton({ item }) {
    const [loading, setLoading] = useState(false);
    const [btnText, setBtnText] = useState("add to cart");
    const [disabled, setDisabled] = useState(false)
    const count = useSelector((state) => state.counter.value);
    const disPatch = useDispatch();


    const addProductToCart = () => {
        setLoading(true);
        addToCart(item.id).then((res) => {
            message.success(`${item.title} has been added to cart!`);
            setLoading(false);
        });
    };
    return (
        <Button
            type="link"
            onClick={() => {
                addProductToCart();
                disPatch(increment());
                disPatch(addItemToCart(item));
                setBtnText("added to cart");
                setDisabled(true)
            }}
            loading={loading}
            disabled={disabled}
        >
            {btnText}
        </Button>
    );
};

export default AddToCartButton;