// import { useEffect, useState } from 'react';
// import './News.css'

// function News() {

//     const [news, setNews] = useState();
//     const [isLoading, setIsLoading] = useState(true);



//     const getNews = async () => {




//         try {
//             const response = await fetch(" https://newsdata.io/api/1/latest?apikey=pub_b883b9e4fe6b4847a068c79abcde1369&q=pizza");
//             const data = await response.json();
//             setNews(data);
//         }
//         catch {

//         }
//         finally {
//             setIsLoading(false);
//         }

//     }

//     useEffect(() => {
//         getNews()
//     }, []);

//     if (isLoading) {
//         return (
//             <div className='text-white d-flex align-items-center justify-content-center vh-100'>
//                 <div class="spinner-border" role="status">
//                     <span class="visually-hidden">Loading...</span>
//                 </div>
//             </div>
//         );

//     }




//     return (

//         <div>
//             <div className="bg-light">
//                 {/* Navbar */}
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
//                     <a className="navbar-brand fw-bold fs-1" href="#">NewsHub</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="nav">
//                         <ul className="navbar-nav ms-auto">
//                             <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#">World</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#">Technology</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#">Sports</a></li>
//                         </ul>
//                     </div>
//                 </nav>

//                 {/* Hero Section */}

//                 <div className="container my-4">
//                     <div className="p-4 bg-dark text-white rounded">
//                         <h1>Breaking News</h1>
//                         <p>Stay updated with the latest headlines from around the world.</p>
//                     </div>
//                 </div>

//                 {/* News Cards */}




//                 <div className="container">
//                     <div className="row g-4 d-flex justify-content-evenly">
//                         {
//                             news.results.map((result) => (
//                                 <div className="card col-lg-4 shadow-sm">
//                                     <img
//                                         src={result.image_url}
//                                         className="card-img-top img-fluid rounded-3 mt-3"
//                                         alt="news"
//                                     />
//                                     <div className="card-body">
//                                         <h5 className="card-title text-white">{result.title}</h5>
//                                         <p className="card-text text-white">
//                                             {result.description}
//                                         </p>
//                                     </div>
//                                     <div className="card-footer text-white d-flex justify-content-between">
//                                         <small className="text-white">{result.creator}</small>
//                                         <button className="btn btn-sm btn-primary">Read More</button>
//                                     </div>
//                                         <small className='text-white px-3 py-2 fs-4 fw-bold'>{result.country}</small>

//                                 </div>


//                             ))
//                         }

//                     </div>

//                 </div>
//             </div>

//             {/* Footer */}
//             <footer className="bg-dark text-white text-center p-3 mt-4">
//                 <p className="mb-0">© 2026 NewsHub | All Rights Reserved</p>
//             </footer>
//         </div >
//     );
// }



// export default News;








import { useEffect, useState } from 'react';
import './News.css';

function News() {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getNews = async () => {
        try {
            const response = await fetch("https://newsdata.io/api/1/latest?apikey=pub_b883b9e4fe6b4847a068c79abcde1369&q=pizza");
            const data = await response.json();
            setNews(data.results || []);
        } catch (error) {
            console.error('Error fetching news:', error);
            setNews([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getNews();
    }, []);

    if (isLoading) {
        return (
            <div className='loading-container'>
                <div className="spinner-border text-white" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-light min-vh-100">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container px-4">
                        <a className="navbar-brand fw-bold" href="#">NewsHub</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="nav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">World</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Technology</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Sports</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="hero-section pt-5 mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="hero-card text-center text-white">
                                    <h1>Breaking News</h1>
                                    <p>Stay updated with the latest headlines from around the world.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* News Cards */}
                <section className="news-container">
                    <div className="container">
                        <div className="row">
                            <div className="news-grid">
                                {
                                news.map((result, index) => (
                                    <div key={index} className="news-card">
                                        <span className="country-badge">{result.country}</span>
                                        <img
                                            src={result.image_url || 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=220&fit=crop'}
                                            className="news-image"
                                            alt={result.title}
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=220&fit=crop';
                                            }}
                                        />
                                        <div className="news-card-body">
                                            <h3 className="news-title">{result.title}</h3>
                                            <p className="news-description">
                                                {result.description || 'No description available.'}
                                            </p>
                                            <div className="news-footer">
                                                <span className="news-creator">
                                                    {result.creator || 'Anonymous'}
                                                </span>
                                                <button className="read-more-btn">
                                                    Read More →
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer>
                <div className="container">
                    <div className="text-center">
                        <p className="mb-0">© 2024 NewsHub | All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default News;
