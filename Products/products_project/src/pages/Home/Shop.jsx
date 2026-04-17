import { useEffect, useState } from 'react'
import './Shop.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Shop() {

    const baseURL = "http://localhost:3000";
    const [productsData, setProductsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const Navigate= useNavigate();

    const navigateToDetailPage = ()=>{
        Navigate('/productDetail');
    }

    const getProducts = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/products");
            const data = await response.json();
            setProductsData(data);
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getProducts()
    }, []);

    if (isLoading) {
        return (
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section>
                <div>
                    <img src="/Images/Bannar.png" className='img-fluid' />
                </div>
            </section>

            <section className='striped-overlay'>
                <div className="py-5 ">
                    <div className='d-flex justify-content-between'>
                        <h1>Popular Categories</h1>
                        <span>View all</span>
                    </div>
                </div>

                {/* cards */}
                <div className='container'>
                    <div className="row">

                        {
                            productsData?.products?.map((product) => (

                                <div className="col-4">
                                    <div className="card shadow" onClick={navigateToDetailPage}>
                                        <img src={baseURL + product.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">
                                                {product.description}
                                            </p>
                                            <a href="#" className="btn btn-success">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop
