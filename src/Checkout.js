import React from "react";
import './Checkout.css';
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout ()
{
    const [ {basket}, dispatchState ] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className='checkout__add'
                    src='https://cdn.wallpapersafari.com/10/8/doia2n.jpg'
                    alt='sci-fi city'/>

                <div>
                    <h2 className='checkout__title'>
                       Your Shopping Basket
                    </h2>

                    { basket.map( item =>
                        <CheckoutProduct
                            id={ item.id }
                            image={ item.image }
                            title={ item.title }
                            price={ item.price }
                            rating={ item.rating }
                        />
                    )}
                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
