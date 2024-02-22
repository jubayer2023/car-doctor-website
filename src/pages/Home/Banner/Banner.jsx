import banner1 from "../../../assets/images/banner/1.jpg";
import banner2 from "../../../assets/images/banner/2.jpg";
import banner3 from "../../../assets/images/banner/3.jpg";
import banner4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[300px] md:h-[400px] lg:h-[500px] mt-12 rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner1} className="w-full rounded-xl" />
          <div className="absolute flex items-center  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className=" text-white w-1/2 space-y-5 pl-8">
              <h3 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h3>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex ">
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex items-center  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className=" text-white w-1/2 space-y-5 pl-8">
              <h3 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h3>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex ">
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <div className="absolute flex items-center  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className=" text-white w-1/2 space-y-5 pl-8">
              <h3 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h3>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex ">
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <div className="absolute flex items-center  h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className=" text-white w-1/2 space-y-5 pl-8">
              <h3 className="text-5xl font-bold">
                Affordable Price For Car Servicing
              </h3>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex ">
                <button className="btn btn-primary mr-5">Discover More</button>
                <button className="btn btn-outline btn-secondary">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
