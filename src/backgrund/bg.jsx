import React from 'react';

function Bg() {
  return (
    <div className="absolute -z-10 flex gap-4 p-5 justify-center animation">
      <span className="text-3xl font-bold text-black hover:animate-bounce">
        <i class="fa-solid fa-pencil"></i>
      </span>


      <span className="text-3xl font-bold text-black">
        <i class="fa-solid fa-highlighter"></i>
      </span>

      <span className="text-3xl font-bold text-black">
        <i class="fa-solid fa-clipboard-list"></i>
      </span>

      <span className="text-3xl font-bold text-black"><i class="fa-solid fa-book-open"></i></span>
      <span className="text-3xl font-bold text-black"><i class="fa-solid fa-clipboard-check"></i></span>
      <span className="text-3xl font-bold text-black"><i class="fa-solid fa-calendar-xmark"></i></span>
      <span className="text-3xl font-bold text-black"><i class="fa-regular fa-alarm-clock"></i></span>
    </div>
  );
}

export default Bg;
