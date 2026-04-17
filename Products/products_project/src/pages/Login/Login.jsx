// import { useState } from 'react';
// import './Login.css'

// export default function Login() {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [userData, setUserData] = useState('');

//     const userLogin =async ()=>{
        
//         try{
//             const response =await fetch('http://localhost:3000/api/user/login', {
                
//                 method: 'POST',
//                 headers: {
//                     "Content_Type": "application/json"
//                 },
//                 body:JSON.stringify({
//                     email: email,
//                     pass: password
//                 })

//             });

//             const data =await response.json();
//             setUserData(data);

//             if(userData.status){
//                 alert(userData.message);
//             }else{
//                 alert(userData.message);
//             }
            

//         }catch(e){

//         }
//     }


//     return (
//         <>
//             {/* <nav className="navbar bg-body-tertiary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">
//                         <img src="\Images\logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
//                         Ecobazar
//                     </a>
//                 </div>
//             </nav> */}



//             {/* <!-- Top Bar --> */}
//             <div class="topbar">
//                 <div class="container d-flex justify-content-between align-items-center">
//                     <div>
//                         <i class="bi bi-geo-alt-fill me-1" style="color:var(--green)"></i>
//                         Store Location: Lincoln- 344, Illinois, Chicago, USA
//                     </div>
//                     <div class="d-flex align-items-center gap-3">
//                         <a href="#">Eng</a>
//                         <span class="separator">|</span>
//                         <a href="#">USD</a>
//                         <span class="separator">|</span>
//                         <a href="#"><i class="bi bi-person me-1"></i>Sign In / Sign Up</a>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Main Navbar --> */}
//             <nav className="main-nav">
//                 <div className="container d-flex align-items-center gap-4">
//                     {/* <!-- Brand --> */}
//                     <a href="#" className="brand-logo me-2">
//                         <span className="leaf"><i class="bi bi-leaf-fill"></i></span>
//                         <i className="bi bi-box2 box-icon" style="font-size:22px"></i>
//                         <span>Ecobazar</span>
//                     </a>

//                     {/* <!-- Search --> */}
//                     <div className="search-bar flex-grow-1 mx-2">
//                         <input type="text" placeholder="Search..." />
//                         <button>Search</button>
//                     </div>

//                     {/* <!-- Icons --> */}
//                     <div className="nav-icons ms-auto">
//                         <a href="#" className="icon-btn"><i class="bi bi-heart"></i></a>
//                         <a href="#" className="icon-btn d-flex align-items-center gap-2">
//                             <div className="position-relative">
//                                 <i className="bi bi-bag"></i>
//                                 <span className="badge-count">3</span>
//                             </div>
//                             <div className="cart-info d-none d-md-block">
//                                 <small>Shopping cart</small><br />
//                                 <strong>$57.00</strong>
//                             </div>
//                         </a>
//                         <a href="tel:2195550114" className="phone-link d-none d-lg-flex">
//                             <i className="bi bi-telephone-fill"></i> (219) 555-0114
//                         </a>
//                     </div>
//                 </div>
//             </nav>

//             {/* <!-- Secondary Nav --> */}
//             <div className="sec-nav">
//                 <div className="container">
//                     <nav class="d-flex align-items-center flex-wrap">
//                         <a href="#" className="nav-link active">Home <i class="bi bi-chevron-down" style="font-size:10px"></i></a>
//                         <a href="#" className="nav-link">Shop <i class="bi bi-chevron-down" style="font-size:10px"></i></a>
//                         <a href="#" className="nav-link">Pages <i class="bi bi-chevron-down" style="font-size:10px"></i></a>
//                         <a href="#" className="nav-link">Blog <i class="bi bi-chevron-down" style="font-size:10px"></i></a>
//                         <a href="#" className="nav-link">About Us</a>
//                         <a href="#" className="nav-link">Contact Us</a>
//                     </nav>
//                 </div>
//             </div>

//             {/* <!-- Hero Banner --> */}
//             <div className="hero-banner">
//                 <div className="breadcrumb-wrap">
//                     <ol className="breadcrumb">
//                         <li className="breadcrumb-item"><a href="#"><i class="bi bi-house-fill"></i></a></li>
//                         <li className="breadcrumb-item"><a href="#">Account</a></li>
//                         <li className="breadcrumb-item active">Login</li>
//                     </ol>
//                 </div>
//             </div>

//             {/* <!-- Page Content --> */}
//             <div className="page-content">
//                 <div className="container">
//                     <div className="signin-card">
//                         <h2>Sign In</h2>
//                         <form>
//                             <div className="mb-3">
//                                 <label className="form-label">Email</label>
//                                 <input type="email" 
//                                         className="form-control" 
//                                         placeholder=""
//                                         onChange={(e)=>setEmail(e.target.value)} />
//                             </div>
//                             <div className="mb-3">
//                                 <label className="form-label">Password</label>
//                                 <div className="input-group">
//                                     <input type="password"
//                                     className="form-control"
//                                     id="password" placeholder=""
//                                     onChange={(e)=>setPassword(e.target.value)} />
//                                     <button className="btn-eye btn" type="button" onclick="togglePwd()">
//                                         <i className="bi bi-eye" id="eye-icon"></i>
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                         <div className="d-flex align-items-center justify-content-between mb-4">
//                             <div className="form-check">
//                                 <input className="form-check-input" type="checkbox" id="remember" />
//                                 <label className="form-check-label" for="remember">Remember me</label>
//                             </div>
//                             <a href="#" className="forgot-link">Forgot Password?</a>
//                         </div>
//                         <button className="btn-login">Login</button>
//                         <p className="register-text">Don't have an account? <a href="#">Register</a></p>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Newsletter --> */}
//             <div className="newsletter">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         <div className="col-md-4 mb-3 mb-md-0">
//                             <h5>Subscribe our Newsletter</h5>
//                             <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
//                         </div>
//                         <div className="col-md-5 mb-3 mb-md-0">
//                             <div className="newsletter-form">
//                                 <input type="email" placeholder="Your email address" />
//                                 <button className="btn-subscribe">Subscribe</button>
//                             </div>
//                         </div>
//                         <div className="col-md-3 text-md-end">
//                             <div className="social-icons">
//                                 <a href="#"><i className="bi bi-facebook"></i></a>
//                                 <a href="#"><i className="bi bi-twitter"></i></a>
//                                 <a href="#"><i className="bi bi-pinterest"></i></a>
//                                 <a href="#"><i className="bi bi-instagram"></i></a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* <!-- Footer --> */}
//             <footer>
//                 <div className="container">
//                     <div className="row g-4 mb-4">
//                         {/* <!-- Brand --> */}
//                         <div className="col-lg-3 col-md-6">
//                             <div className="footer-brand">
//                                 <span className="leaf"><i className="bi bi-leaf-fill"></i></span>
//                                 <span>Ecobazar</span>
//                             </div>
//                             <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
//                             <div className="footer-contact">
//                                 <div className="mb-1"><i class="bi bi-telephone-fill me-2" style="color:var(--green)"></i><a href="tel:2195550114">(219) 555-0114</a></div>
//                                 <div><i className="bi bi-envelope-fill me-2" style="color:var(--green)"></i><a href="mailto:proxy@gmail.com">Proxy@gmail.com</a></div>
//                             </div>
//                         </div>

//                         {/* <!-- My Account --> */}
//                         <div className="col-lg-2 col-md-3 col-6 footer-col">
//                             <h6>My Account</h6>
//                             <ul>
//                                 <li><a href="#">My Account</a></li>
//                                 <li><a href="#">Order History</a></li>
//                                 <li><a href="#">Shopping Cart</a></li>
//                                 <li><a href="#">Wishlist</a></li>
//                             </ul>
//                         </div>

//                         {/* <!-- Helps --> */}
//                         <div className="col-lg-2 col-md-3 col-6 footer-col">
//                             <h6>Helps</h6>
//                             <ul>
//                                 <li><a href="#">Contact</a></li>
//                                 <li><a href="#">Faqs</a></li>
//                                 <li><a href="#">Terms &amp; Condition</a></li>
//                                 <li><a href="#">Privacy Policy</a></li>
//                             </ul>
//                         </div>

//                         {/* <!-- Proxy --> */}
//                         <div className="col-lg-2 col-md-3 col-6 footer-col">
//                             <h6>Proxy</h6>
//                             <ul>
//                                 <li><a href="#">About</a></li>
//                                 <li><a href="#">Shop</a></li>
//                                 <li><a href="#">Product</a></li>
//                                 <li><a href="#">Track Order</a></li>
//                             </ul>
//                         </div>

//                         {/* Categories */}
//                         <div className="col-lg-3 col-md-3 col-6 footer-col">
//                             <h6>Categories</h6>
//                             <ul>
//                                 <li><a href="#">Fruit &amp; Vegetables</a></li>
//                                 <li><a href="#">Meat &amp; Fish</a></li>
//                                 <li><a href="#">Bread &amp; Bakery</a></li>
//                                 <li><a href="#">Beauty &amp; Health</a></li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     );
// }



import { useState } from 'react';
import './Login.css'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState('');

    const userLogin = async (e) => {
            
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                headers: {
                    "Content_Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    pass: password
                })
            });
            const data = await response.json();
            setUserData(data);
            if (userData.status) {
                alert(userData.message);
            } else {
                alert(userData.message);
            }
        } catch (e) {}
    }

    return (
        <>
            {/* Top Bar */}
            <div className="topbar">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <i className="bi bi-geo-alt-fill me-1" style={{ color: "var(--green)" }}></i>
                        Store Location: Lincoln- 344, Illinois, Chicago, USA
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <a href="#">Eng</a>
                        <span className="separator">|</span>
                        <a href="#">USD</a>
                        <span className="separator">|</span>
                        <a href="#"><i className="bi bi-person me-1"></i>Sign In / Sign Up</a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="main-nav">
                <div className="container d-flex align-items-center gap-4">
                    <a href="#" className="brand-logo me-2">
                        <span className="leaf"><i className="bi bi-leaf-fill"></i></span>
                        <i className="bi bi-box2 box-icon" style={{ fontSize: "22px" }}></i>
                        <span>Ecobazar</span>
                    </a>

                    <div className="search-bar flex-grow-1 mx-2">
                        <input type="text" placeholder="Search..." />
                        <button>Search</button>
                    </div>

                    <div className="nav-icons ms-auto">
                        <a href="#" className="icon-btn"><i className="bi bi-heart"></i></a>
                        <a href="#" className="icon-btn d-flex align-items-center gap-2">
                            <div className="position-relative">
                                <i className="bi bi-bag"></i>
                                <span className="badge-count">3</span>
                            </div>
                            <div className="cart-info d-none d-md-block">
                                <small>Shopping cart</small><br />
                                <strong>$57.00</strong>
                            </div>
                        </a>
                        <a href="tel:2195550114" className="phone-link d-none d-lg-flex">
                            <i className="bi bi-telephone-fill"></i> (219) 555-0114
                        </a>
                    </div>
                </div>
            </nav>

            {/* Secondary Nav */}
            <div className="sec-nav">
                <div className="container">
                    <nav className="d-flex align-items-center flex-wrap">
                        <a href="#" className="nav-link active">Home <i className="bi bi-chevron-down" style={{ fontSize: "10px" }}></i></a>
                        <a href="#" className="nav-link">Shop <i className="bi bi-chevron-down" style={{ fontSize: "10px" }}></i></a>
                        <a href="#" className="nav-link">Pages <i className="bi bi-chevron-down" style={{ fontSize: "10px" }}></i></a>
                        <a href="#" className="nav-link">Blog <i className="bi bi-chevron-down" style={{ fontSize: "10px" }}></i></a>
                        <a href="#" className="nav-link">About Us</a>
                        <a href="#" className="nav-link">Contact Us</a>
                    </nav>
                </div>
            </div>

            {/* Hero Banner */}
            <div className="hero-banner">
                <div className="breadcrumb-wrap">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#"><i className="bi bi-house-fill"></i></a></li>
                        <li className="breadcrumb-item"><a href="#">Account</a></li>
                        <li className="breadcrumb-item active">Login</li>
                    </ol>
                </div>
            </div>

            {/* Page Content */}
            <div className="page-content">
                <div className="container">
                    <div className="signin-card">
                        <h2>Sign In</h2>
                        <form onSubmit={userLogin}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email"
                                    className="form-control"
                                    placeholder=""
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <input type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        id="password"
                                        placeholder=""
                                        onChange={(e) => setPassword(e.target.value)} />
                                        
                                        
                                    <button className="btn-eye btn" type="submit" onClick={() => setShowPassword(!showPassword)}>
                                        <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} id="eye-icon"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#" className="forgot-link">Forgot Password?</a>
                        </div>
                        <button className="btn-login" onClick={userLogin}>Login</button>
                        <p className="register-text">Don't have an account? <a href="#">Register</a></p>
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="newsletter">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <h5>Subscribe our Newsletter</h5>
                            <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                        </div>
                        <div className="col-md-5 mb-3 mb-md-0">
                            <div className="newsletter-form">
                                <input type="email" placeholder="Your email address" />
                                <button className="btn-subscribe">Subscribe</button>
                            </div>
                        </div>
                        <div className="col-md-3 text-md-end">
                            <div className="social-icons">
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-twitter"></i></a>
                                <a href="#"><i className="bi bi-pinterest"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="row g-4 mb-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-brand">
                                <span className="leaf"><i className="bi bi-leaf-fill"></i></span>
                                <span>Ecobazar</span>
                            </div>
                            <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                            <div className="footer-contact">
                                <div className="mb-1"><i className="bi bi-telephone-fill me-2" style={{ color: "var(--green)" }}></i><a href="tel:2195550114">(219) 555-0114</a></div>
                                <div><i className="bi bi-envelope-fill me-2" style={{ color: "var(--green)" }}></i><a href="mailto:proxy@gmail.com">Proxy@gmail.com</a></div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6 footer-col">
                            <h6>My Account</h6>
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Order History</a></li>
                                <li><a href="#">Shopping Cart</a></li>
                                <li><a href="#">Wishlist</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6 footer-col">
                            <h6>Helps</h6>
                            <ul>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Faqs</a></li>
                                <li><a href="#">Terms &amp; Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 col-6 footer-col">
                            <h6>Proxy</h6>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Track Order</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-3 col-6 footer-col">
                            <h6>Categories</h6>
                            <ul>
                                <li><a href="#">Fruit &amp; Vegetables</a></li>
                                <li><a href="#">Meat &amp; Fish</a></li>
                                <li><a href="#">Bread &amp; Bakery</a></li>
                                <li><a href="#">Beauty &amp; Health</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}