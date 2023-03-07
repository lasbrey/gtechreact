// import Image from "next/image";
import React from "react";
import Container from "./container";

export default function Importance(props) {
  const { data } = props;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            {/* <img
              src={data.image}
              width="521"
              className="rounded-xl"
              height="482"
              alt="Importance"
              layout="intrinsic"
            /> */}
          </div>
          <div>
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
              {data.titleTwo}
            </h3>
            <div className="w-full mt-5 ">
              {data.bulletsTwo.map((item, index) => (
                <Tance key={index} t icon={item.icon}>
                  {item.desc}
                </Tance>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl ">
              {data.title}
            </h3>
            <div className="w-full mt-5 ">
              {data.bullets.map((item, index) => (
                <Tance key={index} t icon={item.icon}>
                  {item.desc}
                </Tance>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Tance(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-red-500 rounded-md w-8 h-8 ">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-red-50",
          })}
        </div>
        <div>
          <p className="mt-1 text-gray-500">{props.children}</p>
        </div>
      </div>
    </>
  );
}
