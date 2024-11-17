import React from 'react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f2] relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-12 right-12 w-20 h-20 bg-red-400 rounded-full opacity-70 animate-wave" />
      <div className="absolute top-[20%] left-[10%] w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-wave-slow" />
      <div className="absolute bottom-[25%] right-[15%] w-4 h-4 bg-green-500 rounded-full opacity-60 animate-wave" />
      <div className="absolute bottom-[15%] left-[20%] w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-wave-slow" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            {/* AR CREATOR */}
            <div className="relative">
              <h2 className="text-6xl sm:text-7xl lg:text-[8.5rem] font-black tracking-tighter leading-none">
                AR CREATOR
              </h2>
              {/* Blue box */}
              <div 
                className="absolute -right-24 top-1/2 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[#4285f4] rounded-3xl"
                style={{ transform: 'translate(100%, -50%)' }}
              />
            </div>
            
            {/* 3D ARTIST */}
            <div className="relative mt-2">
              <h2 className="text-6xl sm:text-7xl lg:text-[8.5rem] font-black tracking-tighter leading-none">
                & 3D ARTIST
              </h2>
              {/* Yellow box */}
              <div 
                className="absolute -top-16 sm:-top-24 lg:-top-32 right-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 bg-yellow-400 rounded-br-[3rem]"
                style={{ transform: 'translate(0, -50%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}