import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import { BsGithub } from "react-icons/bs";
// import { Si365Datascience } from "react-icons/si";
import Data_Visulization from "../../Assets/Certificates/Data_Visulization.jpeg";
import AdvancedSQL from "../../Assets/Certificates/AdvancedSQL.jpeg";
import PowerBI from "../../Assets/Certificates/PowerBI.jpeg";
import Statistics from "../../Assets/Certificates/Statistics.jpeg";
import DataScience from "../../Assets/Certificates/DataScience.jpeg";
import Excel from "../../Assets/Certificates/Excel.jpg";
import Python from "../../Assets/Certificates/python.jpeg";
import Pandas from "../../Assets/Certificates/pandas.jpg";
import Datascience from "../../Assets/svgexport-1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";



function Certificate() {
  const certificates = [
    {
      img: Data_Visulization,
      checkLink: "https://learn.365datascience.com/c/2275a49cda/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Data_Visulaziation.pdf"
    },
    {
      img: AdvancedSQL,
      checkLink: "https://learn.365datascience.com/c/860fee2230/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Advanced%20SQL.pdf"
    },
    {
      img: PowerBI,
      checkLink: "https://learn.365datascience.com/c/6ee39ddca2/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Power%20BI.pdf"
    },
    {
      img: Statistics,
      checkLink: "https://learn.365datascience.com/c/53f3dca992/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Statistics.pdf"
    },
    {
      img: DataScience,
      checkLink: "https://learn.365datascience.com/c/05b37031e1/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Introduction%20to%20Data%20and%20Data%20Science.pdf"
    },
    {
      img: Excel,
      checkLink: "https://learn.365datascience.com/c/0ecf3cc1eb/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/AdvancedExcel.pdf"
    },
    {
      img: Python,
      checkLink: "https://learn.365datascience.com/c/b57b1d0ec5/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Introduction%20to%20Python.pdf"
    },
    {
      img: Pandas,
      checkLink: "https://learn.365datascience.com/c/1f3c1dc69f/",
      githubLink: "https://github.com/ibrahimnady/Certificates/blob/main/Pandas.pdf"
    },
  ];
  
  return (
    <div style={{width: "100%", paddingBottom: "50px" }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },       // موبايل
          768: { slidesPerView: 2 },     // تابلت
          992: { slidesPerView: 3 },     // لابتوب/ديسكتوب
        }}
       

      >
        {certificates.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className="tech-certificates" style={{ marginBottom: "30px",marginTop: "30px" , width: "100%" }}>
              <img
                src={cert.img}
                alt="certificate"
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "15px",
                  borderRadius: "20px",
                  padding: "10px",
                  // border: "1px solid #a560c2",
                }}
              />
              <div
                className="d-flex gap-2 justify-content-center"
                style={{ flexWrap: "wrap" }}
              >
                <Button
                  variant="primary"
                  href={cert.githubLink}
                  target="_blank"
                  style={{ width: "100%", maxWidth: "180px" }}
                >
                  <BsGithub /> GitHub
                </Button>

                <Button
                  variant="primary"
                  href={cert.checkLink}
                  target="_blank"
                  style={{
                    width: "100%",
                    maxWidth: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={Datascience}
                    style={{ width: "50px", marginRight: "5px" }}
                  />
                  Verify
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
      
    
  );
}

export default Certificate;
