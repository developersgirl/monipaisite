import React from 'react';
import './index.css'
import logo from '../img/logo (1).png';
import shopping from '../img/shopping-cart (3) 1.png';
import map from '../img/map.png';
import yellow from '../img/yellow.png';
import farro from '../img/farro 1.png';
import arrow from '../img/right-arrow (1) 1.png';
import pak from '../img/pak.png';



const Home = () => {
    return (
        <div className="home">
            <div className="head">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <div className="groupmenu">
                        <a href="">Home</a>
                        <a href="">Products</a>
                        <a href="">My Lists</a>
                        <a href="">Sales & Discounts</a>
                    </div>
                    <div className="rightmenu">
                        <a href="#"> <img src={shopping} /> 2 item</a>
                        <a href="#">Sign In</a>
                    </div>
                </div>
                <div className="center">
                    <h1>YOU CAN SAVE  UP TO 50$ <br />
                        ON AVERAGE SMART GROCERY SHOPPING</h1>
                    <p>Plan your shopping, find cheapest grocery prices <br />
                        and save more. </p>
                    <div className="box">
                        <div className="first">
                            <p>City</p>
                            <h4>Hamilton</h4>
                        </div>
                        <div className="first">
                            <p>Region</p>
                            <h4>Whitiora</h4>
                        </div>
                        <div className="line"></div>
                        <img src={map} />
                        <div className="first rasm">
                            <p>Store</p>
                            <img src={yellow} />
                            <img src={farro} />
                        </div>
                        <div className="btn">
                            <p>Let's assemble the cart</p>
                            <img src={arrow} />
                        </div>

                    </div>
                    
                </div>
            </div>
            <div className="blok">
                <h1>BEST GROCERY DEALS FOR KIWIS</h1>
                <p>Plan your shopping, find cheapest grocery prices and save more</p>
                <div className="items">
                    <div className="item">
                        <div className="btn2">
                            <p>UP TO 50%</p>
                        </div>
                        <img src={pak} />
                        <h4>PAK’nSAVE</h4>
                        <p>321 products with discounts</p>
                    </div>
                    <div className="item">
                        <div className="btn2">
                            <p>UP TO 50%</p>
                        </div>
                        <img src={pak} />
                        <h4>PAK’nSAVE</h4>
                        <p>321 products with discounts</p>
                    </div>
                    <div className="item">
                        <div className="btn2">
                            <p>UP TO 50%</p>
                        </div>
                        <img src={pak} />
                        <h4>PAK’nSAVE</h4>
                        <p>321 products with discounts</p>
                    </div>
                    <div className="item">
                        <div className="btn2">
                            <p>UP TO 50%</p>
                        </div>
                        <img src={pak} />
                        <h4>PAK’nSAVE</h4>
                        <p>321 products with discounts</p>
                    </div>
                    <div className="item">
                        <div className="btn2">
                            <p>UP TO 50%</p>
                        </div>
                        <img src={pak} />
                        <h4>PAK’nSAVE</h4>
                        <p>321 products with discounts</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Home;