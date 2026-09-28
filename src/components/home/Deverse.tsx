import {
  BusinessIcon,
  DevelopmentIcon,
  ItIcon,
  MarketingIcon,
  PenIcon,
  PhotoIcon,
} from "../../icons/Icon";

const Deverse = () => {
  const categories = [
    {
      title: "Design",
      icon: <PenIcon />,
    },
    {
      title: "Development",
      icon: <DevelopmentIcon />,
    },
    {
      title: "IT & Software",
      icon: <ItIcon />,
    },
    {
      title: "Business",
      icon: <BusinessIcon />,
    },
    {
      title: "Marketing",
      icon: <MarketingIcon />,
    },
    {
      title: "Photography",
      icon: <PhotoIcon />,
    },
  ];
  return (
    <div className="mt-[72px] wrapper mb-[120px]">
      <h1 className="heading-4">Explore Diverse Learning Paths at Bytespace</h1>

      <p className="para-3 mt-4 text-center max-w-[950px] mx-auto">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there's
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-10 mt-[68px]">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border border-[#CED0D3] rounded-3xl py-9 cursor-pointer hover:shadow-md hover:border-gray-300 transition-all duration-200 group"
          >
            {/* Lime Circular Icon Container */}
            <div className="">{item.icon}</div>

            {/* Category Title */}
            <h3 className="text-sm sm:text-xl font-medium text-[#242528] text-center mt-3">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deverse;
