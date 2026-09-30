import blog1 from "../../public/home/blog/blog1.png";
import blog2 from "../../public/home/blog/blog2.png";
import blog3 from "../../public/home/blog/blog3.png";
import blog4 from "../../public/home/blog/blog4.png";
import blog5 from "../../public/home/blog/blog5.png";
import blog6 from "../../public/home/blog/blog6.png";

export const blogData = [
  {
    id: 1,
    image: blog1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    students: "26+",
    price: "$25",
  },
  {
    id: 2,
    image: blog2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    students: "26+",
    price: "$25",
  },
  {
    id: 3,
    image: blog3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    students: "26+",
    price: "$25",
  },
  {
    id: 4,
    image: blog4,
    title: "Balancing Productivity an...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    students: "26+",
    price: "$25",
  },
  {
    id: 5,
    image: blog5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    students: "26+",
    price: "$25",
  },
  {
    id: 6,
    image: blog6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    level: "Beginner",
    students: "26+",
    price: "$25",
  },
];

import img1 from "../../public/home/testimonials/img1.png";
import img2 from "../../public/home/testimonials/img2.png";
import img3 from "../../public/home/testimonials/img3.png";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: img1,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: img2,
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: img3,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: img1,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: img3,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];
