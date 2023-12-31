/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Routes, Route, Link } from 'react-router-dom';
import '../App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Product from './Product'

export default function Main({ ProductProps }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    let BACKEND_URL;
    if (process.env.NODE_ENV == "production") {
        BACKEND_URL = "https://ciar.onrender.com"
    } else {
        BACKEND_URL = "http://localhost:7500"
    }

    function getProducts() {
        axios.get(`${BACKEND_URL}/products`)
            .then(res => {
                setProducts(res.data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        getProducts()
    }, []);


    return (
        loading ? <h1>Loading ..</h1> :
            <div className='products'>
              <h2> Articles </h2>  
                <div className='products-container'>
                    {products?.map((product, index) => {
                        return (
                            <div className="product-card" key={index}>
                                
                                <img className="img"  src={product.image} alt={product.title} width='200px' />
                                <h3 className="categorie">{product.category}</h3>
                                <h3> <span className="title">{product.title}</span> </h3>
                                
                                <div style={{ display: 'flex' }}>
                                        
                                    <h3 className="quantite">{product.price} </h3>
                                    {/* <h6>{product?.rating?.rate}</h6> */}
                                    {/* <h6>{product?.rating?.count}</h6> */}
                                </div>
                                <div className='details'>
                                    {/*  Lier le button avec le changement route en ajoutant un id dynamique qui viens de l'objet produit */}
                                    <Link to={`/products/${product.id}`}>
                                        {/*  On lie le button avec la function qui store l'objet du produit onclick */}
                                        <button onClick={(e) => ProductProps(e, product)} id="details">Description</button>
                                    </Link>
                                    <button id="add_to_cart"><a href="#" target="_blank">Fournisseur</a></button>
                                </div>
                            </div>

                        )
                    })}

                </div>
            </div>
    )
}
