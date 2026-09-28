import { useState } from "react";
import Blog from "./Blog";

const Discover = () => {
  const categories = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];
  const [activeCategory, setActiveCategory] = useState("Featured");
  return (
    <div className="mt-[72px] wrapper">
      <h1 className="heading-2 max-w-xl mx-auto text-center">
        Discover Your Passion, Build Your Skills
      </h1>

      <p className="mt-4 para-3 text-center max-w-[950px] mx-auto">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      {/* button part start  */}

      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mt-[42px] ">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-3 rounded-full text-base font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-lime text-black "
                  : "bg-white text-gray-700 hover:bg-lime"
              }`}
            >
              {category}
            </button>
          );
        })}

        {/* + More Button */}
        <button className="px-5 py-3 cursor-pointer rounded-full text-sm font-medium text-blue hover:text-blue-700 hover:bg-blue-50 transition-colors">
          + More
        </button>
      </div>
      {/* button part end  */}

      {/* card part start  */}
      <Blog />
      {/* card part end  */}
    </div>
  );
};

export default Discover;
