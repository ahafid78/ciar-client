/* eslint-disable react/prop-types */

export default function Product({ product }) {
    return (
        <div className="desc">

            
                <div className="descimg"><img  src={product.image} alt={product.title} width={200} height={200} /></div>
                
                <div><h3 ><span className="detitle"> {product.title} </span> </h3></div>

                <h3 className="categorie">{product.category}</h3>

                <div  style={{ display: 'flex' }}>
                    
                    <p><span className="description"> {product.description} </span></p>
                    
                    {/* <h6>{product.price} DA</h6> */}

                    {/* <h6>{product?.rating?.rate}</h6>
                    <h6>{product?.rating?.count}</h6> */}
                </div>
            
                   
        </div>
    )
}
