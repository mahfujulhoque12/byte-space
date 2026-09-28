const Growth = () => {
  return (
    <div className="relative overflow-hidden bg-[#FDFDFD]">
      {/* 
        ১. Ultra Smooth Lime Gradient - Blur & Opacity দিয়ে এটিকে অনেক সফট করা হয়েছে
        - blur-[150px] দেওয়ার ফলে গোলাকার দাগগুলো উধাও হয়ে চারদিকে ছড়িয়ে যাবে।
        - opacity-45 ব্যবহার করায় কালারটি অতিরিক্ত উজ্জ্বল না হয়ে হালকা ও মনোরম দেখাবে।
      */}
      <div
        className="absolute w-[1300px] h-[1300px] -top-[550px] -left-[300px] rounded-full pointer-events-none blur-[150px] opacity-80"
        style={{
          background: `
            radial-gradient(
              circle, 
              #CBFC01 0%, 
              rgba(203, 252, 1, 0.30) 40%, 
              rgba(203, 252, 1, 0) 70%
            )
          `,
        }}
      />

      {/* 
        ২. Ultra Smooth Blue Gradient
        - blur-[140px] এবং opacity-25 দিয়ে এটাকে ইমেজের মত একেবারে হালকা ব্লেন্ড করা হয়েছে।
      */}
      <div
        className="absolute w-[1300px] h-[1300px] -top-[550px] -right-[300px] rounded-full pointer-events-none blur-[140px] opacity-20"
        style={{
          background: `
            radial-gradient(
              circle, 
              #003BE2 0%, 
              rgba(0, 59, 226, 0.20) 45%, 
              rgba(0, 59, 226, 0) 75%
            )
          `,
        }}
      />

      <div className="wrapper relative z-10 py-[120px] grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>sdafasd</div>
        <div>sdafasd</div>
      </div>
    </div>
  );
};

export default Growth;
