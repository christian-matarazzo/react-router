import axios from "axios"
import {useState, useEffect} from "react"

export default function Shop() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log("Sono il pacchetto", response.data);
                setProducts(response.data)
    
            })
            .catch(error => {
                console.error(error)
            })

    }, [])






    return (
        <main>
            <div className="container py-5">
                <h1 className="text-center">Our merch: </h1>
                <div className="row g-4 justify-content-center" >
                {products.map(product => 
                    <div className="col col-12 col-md-6 col-lg-4 d-flex justify-content-center" key={product.id}>
                        <div className="card d-flex flex-column"  style={{ width: '16rem'}}>
                            <img
                                src={product.image}
                                className="card-img-top h-100 w-100"
                                style={{objectFit: 'contain'}}
                                alt="Card cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <h6 className="card-subtitle mb-2 ">{`${product.price} €`}</h6>
{/*                                 <p className="card-text">
                                    {product.description}
                                </p> */}
                            </div>
                        </div>
                    </div>
                )}
                </div>

            </div>
        </main>
    )
}

