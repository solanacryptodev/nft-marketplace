import React from "react";
import './Product.css';
import {useStateValue} from "./StateProvider";

function Product( {id, title, image, price, rating} )
{
    const [{basket}, dispatchState] = useStateValue();
    console.log('This basket >>>', basket);

    const addToBasket = () => {
        dispatchState({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{ title }</p>
                <p className='product__price'>
                    <strong>{ price }</strong>
                    <small>  ATLAS</small>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p></p>
                    ))}
                </div>
            </div>

            <img src={ image } alt='spaceship'/>
            <button onClick={ addToBasket }>Add to Basket</button>
        </div>
    )
}

export default Product
