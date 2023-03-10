// import img from "next/img";
import Container from "./container";
import heroImg from "../../img/1.jpg";

export default function Hero() {
  return (
    <div className="bg-[#01d1f6]">
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              GTECH GLOBAL INTEGRATED
            </h1>
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl text-justify">
              Gtech Global Integrated Limited is a Public Health Consulting Firm
              established August 13th 2008 (RC 766286). The firm is based in
              Abuja and has competencies in Research and Development , community
              mobilsation, Capacity Building, Monitoring and Evaluation, Project
              Planning and Management, Data analysis and Modelling.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              {/* <a
                href="/"
                className="px-8 py-3 text-lg font-medium text-center text-white bg-red-600 rounded-md "
              >
                About Us
              </a> */}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={heroImg}
              width="616"
              height="617"
              className="rounded-[26%]"
              alt="Hero Illustration"
              layout="intrinsic"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
