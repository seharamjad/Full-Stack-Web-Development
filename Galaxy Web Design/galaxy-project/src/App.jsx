import './App.css'

function App() {


  return (
    // SECTION 1 STARTS FROM OVER HERE 
    <section className='back-img text-center'>

      {/* NAVBAR STARTS */}
      <nav className='navbar navbar-expand-lg'>
        <div className="container">
          <div className='navbar-nav'>
            <a href='' className='nav-link text-white mx-5 my-3'>Home</a>
            <a href='' className='nav-link text-white mx-5 my-3'>About</a>
            <a href='' className='nav-link text-white mx-5 my-3'>Contact</a>
            <a href='' className='navbar-brand fw-bold fs-1 text-white mx-5 text-center'>Universe</a>
            <a href='' className='nav-link text-white mx-5 my-3'>Galaxies</a>
            <a href='' className='nav-link text-white mx-5 my-3'>Blog</a>
            <a href='' className='nav-link text-white mx-5 my-3'>العربية</a>
          </div>
        </div>
      </nav>
      {/* NAVBAR ENDS */}

      {/* SECOND ROW STARTS  */}
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='text-white fs-2 fw-bold my-4'>SUN</div>
          </div>
          <div className='d-flex justify-content-center'>
            <div>
              <div className='Row_2_main_text mx-5 my-3 fs-4'>GALAXY</div>
              <div className='Row_2_text mx-5 my-3'>Milky Way</div>
            </div>
            <div>
              <div className='Row_2_main_text mx-5 my-3 fs-4'>DIAMETER</div>
              <div className='Row_2_text mx-5 my-3'>1,392,684 km</div>
            </div>
            <div>
              <div className='Row_2_main_text mx-5 my-3 fs-4'>LENGTH OF DAY</div>
              <div className='Row_2_text mx-5 my-3'>---</div>
            </div>
            <div>
              <div className='Row_2_main_text mx-5 my-3 fs-4'>AVERAGE TEMERATURE</div>
              <div className='Row_2_text mx-5 my-3'>6000 Kelvin</div>
            </div>
          </div>


        </div>
      </div>

      {/* SECOND ROW ENDS  */}



      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <div className='d-flex align-items-center'>
              <img className='img-fluid' src='\Images\Solar System 01.png' alt='' />
              <div className='Row_2_text fw-semi-bold fs-3'>Neptune</div>
            </div>
          </div>
          <div className='col-6'>
            <img src='.\Images\Planet_Sun.png' className='img-fluid sun-img' alt='' />

          </div>
          <div className='col-3'>
            <div className='d-flex align-items-center'>
              <div className='Row_2_text fw-semi-bold fs-3'>Mercury</div>
              <img src='.\Images\Solar System 02.png' alt='' className='img-fluid' />
            </div>
          </div>

        </div>

      </div>
    </section>

    // SECTION 1 ENDS 
  )
}

export default App
