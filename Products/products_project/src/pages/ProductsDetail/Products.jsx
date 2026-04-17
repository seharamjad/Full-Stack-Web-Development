import './Products.css'

export default function ProductDetail() {
    return (
        <>

            <img src="\Images\Breadcrumbs.png" alt="" className="img-fluid" />
            <div className="container">
                <div className="row">
                    <div className='col-1'>
                        <div className=''>
                            <img src="\Images\product_detail1...png" className='img-fluid' alt="" />
                            <img src="\Images\product_detail2.png" className='img-fluid' alt="" />
                            <img src="\Images\product_detail3.png" className='img-fluid' alt="" />
                            <img src="\Images\product_detail4.png" className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-5">
                        <img src="\Images\product_detail1.png" className="img-fluid" alt="" />
                    </div>
                    <div className="col-6">
                        <div className="d-flex mt-5">
                            <div className="fs-2 fw-bold">Chinese Cabbage</div>
                            <div className='mt-3 ms-2'>
                                <span class="badge bg-success">In Stock</span>
                            </div>
                        </div>
                        <div>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <span className='ms-3'> 4 Review </span>
                            <span className='ms-3'>SKU:2,51,594</span>
                        </div>
                        <div className='d-flex'>
                            <div className='cutPrice'>$48.00</div>
                            <div className='actualPrice fw-bold fs-6 ms-3'>$17.28</div>
                            <div className='ms-3'><span className='badge bg-danger'>64% Off</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}