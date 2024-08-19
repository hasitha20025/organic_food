import Logo from "./logo";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4  ">
      <div className="">
      <div className="flex items-center">
        <a href="/"> <Logo /> </a>
        <a href="/">
          <p className="text-primary text-lg font-bold ml-2">Organic Foods</p>
        </a> 
           
      </div>
      <div className="ml-14">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">Product</p>
        <p className="cursor-pointer">About Us</p>
        <p className="cursor-pointer">Contact Us</p> 
      </div>
        

      </div>
      <div className="">
        <p>Follow us on social media</p>
        <div className="flex gap-4 my-3 ">
          <FaFacebook className="cursor-pointer size-8"/>
          <FaSquareInstagram className="cursor-pointer size-8"/>
          <FaYoutube className="cursor-pointer size-8"/>
          <FaLinkedin className="cursor-pointer size-8"/>
          <FaPinterest className="cursor-pointer size-8" />
          <AiFillTikTok className="cursor-pointer size-8"/>
        </div>
        <p>Address : 7th Mile post, Katugasthota Road, Kandy</p>
        <p>Phone : (+94) 78 437 5524</p>
        <p>Email : organicfood@gmail.com</p>
      </div>    
      </div>
      <hr className="border-t-2 border-gray-300 my-3"/>
      <p className="text-center">Copyright © {currentYear}. Organic Foods, Inc. All rights reserved</p>
    </div>
    
    
  )
}