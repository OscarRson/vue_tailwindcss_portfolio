import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#171717]">
        <div className="wrap flex justify-between items-center px-12 text-white font-bold py-6 tl:px-4 tl:py-4 ">
          <h1 className="text-3xl">Susanoo</h1>
          <div className="flex gap-4 cursor-pointer ">
            <a href="https://github.com/AngrySusanoo" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>

            <a href="live:.cid.ae278013393c8c04" target="_blank">
              <i className="fa-brands fa-skype border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="lunadev823@gmail.com" target="_blank">
              <i className="fa fa-envelope border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
