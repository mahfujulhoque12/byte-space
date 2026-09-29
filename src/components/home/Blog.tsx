import { blogData } from "../../data/data";
import { ChartIcon } from "../../icons/Icon";
import { IoStar } from "react-icons/io5";

const Blog = () => {
  return (
    <div className="mt-[77px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl p-4 border border-[#CED0D3] shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Image & Overlay Meta Header */}
            <div className="relative rounded-xl overflow-hidden  mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full "
              />
            </div>

            {/* Content Details */}
            <div className="px-1">
              {/* Title & Rating */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="heading-3">{item.title}</h3>
                <div className="flex items-center gap-1 text-lg font-normal text-[#4F4F4F] shrink-0 mt-0.5">
                  <span>{item.rating}</span>
                  <span className="text-[#CED0D3]">
                    <IoStar size={19} />
                  </span>
                </div>
              </div>

              {/* Author */}
              <p className="text-xs text-gray-600 mt-0.5">
                by
                <span className="text-blue pl-2">{item.author}</span>
              </p>

              {/* Level & Avatars */}
              <div className="flex items-center gap-3 mt-4">
                {/* Level badge */}
                <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1 text-xs text-[#4B4C53] font-medium">
                  <span className="text-gray-500 font-bold">
                    <ChartIcon />
                  </span>
                  <span>{item.level}</span>
                </div>

                {/* Avatar Stack */}
                <div className="flex items-center -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=11"
                    alt="user"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=12"
                    alt="user"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=13"
                    alt="user"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=14"
                    alt="user"
                  />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-lime text-[10px] font-bold flex items-center justify-center text-gray-900">
                    {item.students}
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4  flex items-baseline gap-1">
                <span className="text-xl font-semibold text-blue">
                  {item.price}
                </span>
                <span className="text-xs text-[#4F4F4F] font-normal">
                  /lifetime
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
