import { useEffect, useState } from 'react';
import './App.css';


function App() {

  ///// Updating the variable using useState///////
  // var [count, setCount] = useState(5)
  // function handleClick() {
  //     let a= count+1;
  //     setCount(a);
  // }


  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getWeather = async () => {
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=e4fe539d2f76490b8b571405261203&q=Lahore');     
    // fetch is a JavaScript Function which is used to fetch the data from any url or api link 
    const data = await response.json();
    setWeather(data);
    setIsLoading(false);
  };



  useEffect(() => { 
    getWeather();
  }, []);


  if(isLoading){
    return(
        <h1 className='text-white'>Loading . . . .</h1>
    );
  }


  return (

    // Part 1
    <section className='App-Header'>
      <div className='container-fluid vh-100'>
        <div className='row'>
          <div className='col-3 part1 ms-5'>
            <div className="mt-5 position-relative">
              <i className="bi bi-search  position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input
                type="text"
                className="form-control rounded-pill ps-5"
                placeholder="Search city..."
              />
            </div>

            <img
              src=".\images\Cloud_Weather.png"
              class="img-fluid rounded-top"
              alt=""
            />

            <div className='text-white display-2 fw-bold text-center'>{weather.current.temp_c}°C</div>
            <div className='text-white d-flex justify-content-between mt-4'>
              <div className='fs-4'>{weather.location.name}</div>
              <div className='fs-4'>Tuesday</div>
              {/* <button onClick={handleClick} className='btn btn-info'>Clicked {count}</button> */}
            </div>
            <hr className='text-white' />

            <div className='d-flex text-white mt-5'>
              <img src='.\images\Cloud_Rain_img1.png' alt='' className='img-fluid' />
              <div className='ms-3'>{weather.current.condition.text}</div>
            </div>
            <div className='d-flex text-white mt-2'>
              <img src='.\images\Temperature_img2.png' alt='' className='img-fluid' />
              <div className='ms-3'>Temperature in Celsius - {weather.current.temp_c}°C</div>
            </div>
            <div className='d-flex text-white mt-2'>
              <img src='.\images\Temperature_img3.png' alt='' className='img-fluid' />
              <div className='ms-3'>Temperature in For - {weather.current.temp_f}</div>
            </div>

            <div className='card card_1 d-flex shadow mt-5 mb-3' >
              <div className='text-white d-flex mt-3 ms-2 align-items-center'>
                <img src='.\images\Vector_(Stroke)_img4.png' alt='' className='img-fluid card_img1' />
                <div className='ms-2'>
                  <div className='fs-3 fw-bold'>{weather.current.humidity}%</div>
                  <div>Humidity</div>
                </div>
                <div className='d-flex ms-2 align-items-center'>
                  <img src='.\images\wind_img5.png' alt='' className='img-fluid card_img1' />
                  <div className='ms-2'>
                    <div className='fs-3 fw-bold'>{weather.current.wind_kph}km/h</div>
                    <div>Wind Speed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Part 2 */}

          <div className='col-8 part2 ms-2'>

            <div className='ms-3 mt-3 d-flex'>
              <div className='today'>Today</div>
              <div className='week ms-4'>Week</div>
            </div>
            {/* sunday */}
            <div className='row d-flex justify-content-evenly mt-5'>
              <div className='card card_2 shadow text-white rounded'>
                <div className='fs-1 text-center'>Sun</div>
                <div className='text-center'>
                  <img src='.\images\windy-sunny_card_img1.png' className='img-fluid' alt='' />
                </div>
                <div className='fs-1 text-center'>32°</div>
              </div>
              {/* Monday */}
              <div className='card card_2 shadow text-white rounded'>
                <div className='fs-1 text-center'>Mon</div>
                <div className='text-center'>
                  <img src='.\images\sun-on-card_img2.png' className='img-fluid' alt='' />
                </div>
                <div className='fs-1 text-center'>31°</div>
              </div>
              {/* tuesday */}
              <div className='card card_2 shadow text-white rounded'>
                <div className='fs-1 text-center'>Tue</div>
                <div className='text-center'>
                  <img src='.\images\cloudy-on-card_img3.png' className='img-fluid' alt='' />
                </div>
                <div className='fs-1 text-center'>27°</div>
              </div>
              {/* wednesday */}
              <div className='card card_2 shadow text-white rounded'>
                <div className='fs-1 text-center'>Wed</div>
                <div className='text-center'>
                  <img src='.\images\cloudy-rain-on_card_img7.png' className='img-fluid' alt='' />
                </div>
                <div className='fs-1 text-center'>31°</div>
              </div>
              {/* thursday */}
              <div className='card card_2 shadow text-white rounded'>
                <div className='fs-1 text-center'>Thu</div>
                <div className='text-center'>
                  <img src='.\images\cloudy-rain-on_card_img7.png' className='img-fluid' alt='' />
                </div>
                <div className='fs-1 text-center'>25°</div>
              </div>
              {/* friday */}
              <div className='card card_2 shadow text-white rounded'>
                <div className='fs-1 text-center'>Fri</div>
                <div className='text-center'>
                  <img src='.\images\rain-on_card_img6.png' className='img-fluid' alt='' />
                </div>
                <div className='fs-1 text-center'>26°</div>
              </div>
              {/* saturday */}
              <div className='card card_2 shadow text-white rounded'>
                <div className='fs-1 text-center'>Sat</div>
                <div className='text-center'>
                  <img src='.\images\cloudy-rain-on_card_img7.png' className='img-fluid' alt='' />
                </div>
                <div className='fs-1 text-center'>30°</div>
              </div>

            </div>
            {/* Today’s Overview */}
            <div className='text-white mt-5 fw-bold fs-4 ms-5 mb-5'>Today’s Overview</div>
            {/* <div className='d-flex justify-content-between '> */}
            <div className='row px-5'>
              <div className='col-3 card shadow'>
                <div className='part3 mt-3 ms-3 mb-3 rounded'>
                  <div className='text-white px-3 py-3 fs-5'>Air Quality Index</div>
                  <div className='text-white fs-1 fw-bold px-3 py-3'>53</div>
                  <div className='d-flex justify-content-between px-3'>
                    <div className='GoodText'>Good</div>
                    <img src='.\images\air-pollution (1).png' alt='' className='img-fluid' />
                  </div>
                </div>
              </div>

              <div className='col-3 card shadow ms-3'>
                <div className='part3 mt-3 ms-3 rounded'>
                  <div className='text-white px-3 py-3 fs-5'>UV Index</div>
                  <div className='text-white fs-1 fw-bold px-3 py-3'>3</div>
                  <div className='d-flex justify-content-between px-3'>
                    <div className='ModerateText'>Moderate</div>
                    <img src='.\images\uv (1).png' alt='' className='img-fluid' />
                  </div>
                </div>
              </div>

              <div className='col-3 card shadow ms-3'>
                <div className='part3 mt-3 ms-3 rounded'>
                  <div className='text-white px-3 py-3 fs-5'>Pressure (hpa)</div>
                  <div className='text-white fs-1 fw-bold px-3 py-3'>1006</div>
                  <div className='d-flex justify-content-between px-3'>
                    <div className='GoodText'>Normal</div>
                    <img src='.\images\barometer (1).png' alt='' className='img-fluid' />
                  </div>
                </div>
              </div>
            </div>


            <div className='row mb-3'>
              <div className='col-7 card_Graph ms-5 mt-5 rounded'>
                <div className='card shadow text-white mt-3 ms-3'>Precipitation</div>
                <div className='text-center py-4'>
                  <img src='.\images\Line Chart.png' alt='' />
                </div>
              </div>
              <div className='col-3 card_Graph ms-5 mt-5 rounded'>
                <div className='card shadow text-white mt-3 ms-3'>Sunrise & Sunset</div>
                <img />

              </div>
            </div>
          </div>


        </div>
      </div>
    </section >
  );
}

export default App;
