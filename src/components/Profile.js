import React from "react";
import { Link } from "react-router-dom";
import mainImg1 from "../assets/main/main-img-1.png";
import mainImg2 from "../assets/main/main-img-2.png";
import mainImg4 from "../assets/main/main-img-4.png";
const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row flex-grow">
        <div
          className="w-full md:w-[86px] h-[20vh] md:h-auto bg-cover"
          style={{ backgroundImage: `url(${mainImg1})` }}
        ></div>
        <div className="w-full md:w-[344px] h-[20vh] md:h-auto bg-cover flex flex-col justify-between">
          <div
            className="w-[344px] relative bg-cover bg-center flex flex-col justify-center items-center text-center h-full"
            style={{ backgroundImage: `url(${mainImg4})` }}
          >
            <div className="hidden md:flex flex-col justify-center items-center text-center h-full">
              <ul className="z-10">
                <li className="my-4 text-lg text-black cursor-pointer ">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="my-4 text-lg text-black cursor-pointer ">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="my-4 text-lg text-black cursor-pointer ">
                  {" "}
                  <Link to="/booking">Booking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[517px] h-[532px] md:h-auto  text-white p-2">
          <h5 className="font-[Nunito] text-[16px] font-normal text-[#333333] mt-10 ml-2">
            1992/5/14生まれ、日本とカナダのハーフ。
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            16歳でファッションモデルデビュー
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            デビュー1年目にしてフジテレビ“すぽると！”の
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            レギュラーに大抜擢される。
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            レギュラーに大抜擢される。
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            2013年に1st写真集、2015年には2nd写真集と
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            スタイルブックを同時発売、2018年に3rd写真集を発売。
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            2016年に、ViVi専属モデルを卒業し、“sweet”や
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            “BAILA”“SENSE”など多数ファッション誌に出演中。
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            2019年、オリジナルプロテインCRASをプロデュース。
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            2020年には自身のコスメブランド「LAPERICUM」を設立し、
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            クリエイティブな分野でも活躍の場を広げている。
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            同年、車好きが高じて公式YouTubeチャンネル
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            「MAGGY‘s Beauty and the Speed」を開設し、
          </h5>
          <h5 className="font-[Nunito] text-[14px] text-[#333333] font-normal mt-3 ml-2">
            モデルのマギーとは異なった一面を見せている。
          </h5>
        </div>
        <div
          className="w-full md:w-[493px] h-[20vh] md:h-auto bg-cover"
          style={{ backgroundImage: `url(${mainImg2})` }}
        ></div>
      </div>
    </div>
  );
};

export default Profile;
