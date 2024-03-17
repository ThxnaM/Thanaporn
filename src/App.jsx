import moment from 'moment';
import './App.css'
import {   useEffect, useState } from 'react';

import  axios  from 'axios';
import { ImageProfile } from './components/ImageProfile';
import { Title } from './components/Title';
import { TitleRight } from './components/TitleRight';

const enpoint = 'https://sheetdb.io/api/v1/rjnu11gpps65s';

const  App = () => {

  const [hide, setHide] = useState(false);
  const [data, setdata] = useState([]);

  const callAPi = async () =>{
    return axios.get(enpoint).then((response) => {
      const data = response.data
      setdata(data)
    })
  }
  console.log(data)

  useEffect( () =>{
    callAPi()
  }, [])
  
  return (
    <>
      <div className="main">
        <div className="leftPort">
          <ImageProfile images="/src/assets/image.png" />

          <Title title="Thanaporn Makawong">
            <p>Fashion Designer</p>
          </Title>


          <Title title="Contract">
            <p>{moment("2003/3/17").format("DD/MM/YYYY")}</p>

            <p style={{ display: hide ? 'none' : 'block' }}>tel: +660806400738</p>
            <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'hide'}</button>
            <p>Email: unknowrai@gmail.com</p>
          </Title>

          <Title title="eduction">
            <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ เกรดเฉลี่ย 3.51 </p>
            <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
          </Title>

        </div>

      


        <div className="rightPort">

          <TitleRight titles="Profile">
            <p>
              My name is Thanaporn Makawong, 20 years old.
                I”m a student from Suan Sunandha Rajabhat University.
                Information Technology major After graduating, I
                became interested in Ux/Ui Design and Softwaretester.
                Therefore, I wanted to gain internship experience that I
                would like to use in my future career.
            </p>
          </TitleRight>


          <TitleRight titles="workExpreience">
            <p className='headers-details'>Working part-time</p>
            <ul>
              <li>Shabushi restaurant
              </li>
            </ul>
          </TitleRight>
        

          <TitleRight titles="skill">
            
            <ul>
              <li>Creativity</li>
              <li>Communication</li>
              <li>Friendly</li>
              <li>Teamwork</li>
              <li>Critical thinking</li>
            </ul>
          </TitleRight>


        </div>
      </div>

      <div className="tables">
        <h2>ข้อมูลคนในห้อง</h2>
        {data.map((record) => 
          <div key={record.code}>
               {record.code}
                {record.name}
           </div>
           )}
      </div>
    </>
  )
}


export default App