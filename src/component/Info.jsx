import React from "react";
import toyota from '../assets/toyota.jpg'

function Info() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-4xl font-semibold text-gray-900 sm:text-3xl">
                  Discover the Car of Your Dreams Search, Compare, and Drive
                  with Confidence !
                </h2>

                <p className="mt-4 text-gray-700 text-xl flex flex-col items-center gap-3 font-semibold p-6">
                  FindCar is your ultimate destination to search for the perfect
                  vehicle. With advanced filters and comparisons, we make car
                  shopping easy and hassle-free. Whether you're buying or
                  browsing, trust us to guide your journey. Start today and
                  drive towards your dream ride.
                  
                  <span> Feel free to suggest any tweaks...🚗💨 </span>
                </p>
              </div>
            </div>

            <div>
              <img
                src={toyota}
                className="rounded-xl transition-transform duration-500 ease-in-out hover:scale-90"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
