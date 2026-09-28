import brand1 from "../../../public/home/brand/brand1.svg";
import brand2 from "../../../public/home/brand/brand2.svg";
import brand3 from "../../../public/home/brand/brand3.svg";
import brand4 from "../../../public/home/brand/brand4.svg";
import brand5 from "../../../public/home/brand/brand5.svg";

const Brand = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5];

  return (
    <div className="bg-[#F5F5F6]">
      <div className="wrapper py-20">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {brands.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={logo}
                alt={`brand-${index + 1}`}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
