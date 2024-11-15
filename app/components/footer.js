import React from "react";

const Footer = () => {
  return (
    <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
      <div className="container flex px-3 py-8">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full lg:w-1/2">
            <div className="px-3 md:px-0">
              <h3 className="font-bold text-gray-900">About</h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                consectetur dapibus velit ut lacinia.
              </p>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right mt-6 md:mt-0">
            <div className="px-3 md:px-0">
              <h3 className="text-left font-bold text-gray-900">Social</h3>

              <div className="w-full flex items-center py-4 mt-0">
                <a href="#" className="mx-2">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                <a href="#" className="mx-2">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                <a href="#" className="mx-2">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 7 4.243 7 7v1H4C3.447 8 3 8.447 3 9v11C3 21.103 3.897 22 5 22h14c1.103 0 2-0.897 2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4C3.447 8 3 8.447 3 9v11C3 21.103 3.897 22 5 22h14c1.103 0 2-0.897 2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4C3.447 8 3 8.447 3 9v11zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zM5 10h2v2h2v-2h6v2h2v-2h2l0.002 10H5V10z"></path>
                  </svg>
                </a>
                <a href="#" className="mx-2">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 7 4.243 7 7v1H4C3.447 8 3 8.447 3 9v11C3 21.103 3.897 22 5 22h14c1.103 0 2-0.897 2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4C3.447 8 3 8.447 3 9v11zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;