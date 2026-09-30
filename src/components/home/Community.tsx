import { testimonials } from "../../data/data";

const Community = () => {
  return (
    <div className="overflow-hidden relative">
      <div className="wrapper  py-[74px] ">
        {/* 
   gradient 1
      */}
        <div
          className="absolute w-[350px] h-[350px] top-[4%] left-[40%] rounded-full pointer-events-none blur-[100px]"
          style={{
            background: `
      radial-gradient(
        circle,
        #CBFC01 0%,
        #CBFC013B 120%,
        #CBFC010F 105%,
        #CBFC0100 100%
      )
    `,
          }}
        />
        {/* 
   gradient 2
      */}
        <div
          className="absolute w-[800px] h-[400px] bottom-0 -left-50 rounded-full pointer-events-none blur-[100px]"
          style={{
            background: `
      radial-gradient(
        circle,
        #003BE2 20%,
        #003BE23B 20%,
        #003BE20F 30%,
        #003BE200 100%
      )
    `,
          }}
        />
        {/* 
   gradient 3
      */}
        <div
          className="absolute w-[700px] h-[600px] bottom-[5%] -right-40 rounded-full pointer-events-none blur-[80px]"
          style={{
            background: `
      radial-gradient(
        circle,
        #CBFC01 15%,
        #CBFC0180 15%,
        #CBFC013B 75%,
        #CBFC0100 100%
      )
    `,
          }}
        />

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-5">
          <h1 className="heading-2 text-[#000]">
            Discover What Our Community Is Saying
          </h1>
          <p className="para-4 z-20!">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[72px]">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white-main rounded-3xl p-8  border border-gray-200 transition-shadow flex flex-col justify-between z-20"
            >
              <div>
                {/* Avatar */}
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mb-6 border border-gray-100"
                />

                {/* Name & Role */}
                <h3 className="heading-6 mb-0.5">{item.name}</h3>
                <p className="text-blue font-normal text-lg mb-6">
                  {item.role}
                </p>

                {/* Quote */}
                <p className="para-4">{item.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
