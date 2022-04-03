import React from "react";
import Fade from "react-reveal/Fade";
import "./GalaxyBook.css";

import Project from "../Project/Project";

const GalaxyBook = () => {
  return (
    <Fade bottom cascade>
      <section id="GalaxyBook">
        <div class="fluid-container">
          <div className="row">
            <div className="col-lg-5 vertical-center">
              <div className="box">
                {/* {galaxyBook.detail.map((detail) => (
                  <p>⚡{detail}</p>
                ))} */}
              </div>
            </div>
            <div className="col-lg-7 center order-first order-lg-last">
              <div className="fluid-container logo">
                <div class="row">
                  {details.map((detail) => (
                    <Project
                      key={detail.id}
                      img={detail.img}
                      title={detail.title}
                      color={detail.color}
                      desc={detail.desc}
                      MRP={detail.MRP}
                      price={detail.price}
                      emi={detail.emi}
                      emidetail={detail.emidetail}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

const galaxyBook = {
  title: "Full Stack Development",

  detail: [
    "Building responsive website using HTML,CSS,JS,React",
    "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
};
const details = [
  {
    id: 1,
    img: "https://images.samsung.com/is/image/samsung/p6pim/in/np930qed-kb2in/gallery/in-galaxy-book2-pro-360-13inch-np930qeda-417478-np930qed-kb2in-thumb-531522892?$160_160_PNG$",
    title: `Galaxy Book2 Pro 360,33.78cm(13.3'),i7,16GB`,
    color: `Silver`,
    desc: `From ₹5623.96/mo for 24 mos at 15% Interest or ₹ 120990.00`,
    MRP: `MRP (Inclusive of all taxes) Original Price:₹ 145990.00Save `,
    price: `₹25000.00`,
    emi: "No Cost EMI starts from ₹ 9977.35/ month",
    emidetail: `	• Get ₹ 5000  instant cashback on HDFC Bank Ltd Credit and Debit  Card EMI and Credit Card EMI Full Swipe Method
    • Ultra Thin and Light design Details ( 1.04 Kg and 11.5 mm  thickness Design)
    • 33.78 cm (13.3") FHD  AMOLED Display (1920 x 1080)  | Touchscreen  | Intel® Iris® Xe`,
  },
  {
    id: 2,
    img: "https://images.samsung.com/is/image/samsung/p6pim/in/np950qed-ka1in/gallery/in-galaxy-book2-pro-360-15inch-np950qeda-np950qed-ka1in-thumb-531252070?$160_160_PNG$",
    title: `Galaxy Book2 Pro 360,39.62cm(15.6'),i7,16GB`,
    color: `Grphite`,
    desc: `From ₹6060.34/mo for 24 mos at 15% Interest or ₹ 129990.00`,
    MRP: `MRP (Inclusive of all taxes) Original Price:₹ 145990.00Save `,
    price: `₹25000.00`,
    emi: "No Cost EMI starts from ₹ 9977.35/ month",
    emidetail: `• Get ₹ 5000  instant cashback on HDFC Bank Ltd Credit and Debit  Card EMI and Credit Card EMI Full Swipe Method
    • Ultra Thin and Light design Details ( 1.04 Kg and 11.5 mm  thickness Design)
    • 33.78 cm (13.3") FHD  AMOLED Display (1920 x 1080)  | Touchscreen  | Intel® Iris® Xe`,
  },
];
export default GalaxyBook;
