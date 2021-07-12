import React from "react";
import './Home.css'
import Product from "./Product";

function Home()
{
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image'
                     src='https://wallpaperaccess.com/full/1224333.jpg'
                     alt='' />

                <div className='home__row'>
                    <Product
                        id='1'
                        title='The Silver Wing Starfighter: Designed by Tyrane Industries on Koballi Prime, the Silver Wing was designed for the Koballian Space Fleet as their primary line of starfighters after the Blue Wing was decommissioned. Offers speed and durability.'
                        price={100}
                        image='https://www.nicepng.com/png/detail/158-1581245_futuristic-spaceship-png-download-bomber-spaceship.png'
                        rating={5}/>
                    <Product
                        id='2'
                        title='Starship Guerrilla Captain: Experienced and rugged, purchase this NFT if your crew has become unruly and defiant, causing production to slow and failed defense missions. Guerrilla Captains also increase your starship defense per ship.'
                        price={70}
                        image='https://i.pinimg.com/originals/c6/9b/58/c69b581d7e563ac6ef9d302ea923c26e.jpg'
                        rating={4}/>
                </div>

                <div className='home__row'>
                    <Product
                        id='3'
                        title='Heavy Laser Pistol: A standard laser pistol that gets the job done. Being large and heavy, it requires a minimum strength rating to hold and consumes 2 storage slots instead of one. However, you will not find a pistol this side of the galaxy that packs a stronger punch.'
                        price={10}
                        image='https://i.pinimg.com/474x/3c/13/3c/3c133c0d0b5934caa92cf6741234bb33.jpg'
                        rating={5}/>
                    <Product
                        id='4'
                        title='Blue Chronos Battle Armor: Elegant and sleek, this armor was designed by the Menzona Collective on Maurus V and provides protection against energetic and kinetic energy. It is made of the valuable mineral Blue Tothi.'
                        price={90}
                        image='https://thumbs.dreamstime.com/b/sci-fi-astronaut-cartoon-laser-gun-side-view-white-background-sci-fi-astronaut-cartoon-laser-gun-side-view-148148222.jpg'
                        rating={5}/>
                    <Product
                        id='5'
                        title='Sentari Pleasure Yacht: These yachts offer privacy and some of the best encryption software to keep your sad secrets safe. It comes with ten connecting rooms and a grand suite at its center.'
                        price={251}
                        image='https://t4.ftcdn.net/jpg/02/00/75/69/240_F_200756964_r0uiMzMF7bnxSNtBYW6nUniMtRJ4sdJa.jpg'
                        rating={5}/>
                </div>

                <div className='home__row'>
                    <Product
                        id='6'
                        title='Kissian Leviathan Battleship: Anything weapon designed for the Kissian monarchy is built to do one thing well, destroy. The Kissian Leviathan is one of the most feared capitol ships in the galaxy. Many people died securing the deed to this vessel, but countless more because of it.'
                        price={505}
                        image='https://www.tfaw.com/media/catalog/product/F/E/FEB202508.jpg?quality=60&bg-color=255%2C255%2C255&fit=bounds&height=&width=&canvas=%3A'
                        rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
