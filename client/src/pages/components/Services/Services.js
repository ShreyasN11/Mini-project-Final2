import React from "react";
import ServiceCard from "./ServiceCard";
import { FaLock } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { FcServices } from "react-icons/fc";

const Services = () =>{
    
     const icon1=<FaLock size={35} className="text-backgroundColor"/>
     const icon2=<FcServices size={35} className="text-backgroundColor"/>
     const icon3=<MdMedicalServices size={35} className="text-backgroundColor"/>

 return(
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
        <div className="flex flex-col item-center lg:flex-row justify-between">
            <div>
                <h1 className="text-4xl font-semibold text-center ser lg:text-start">Our Services</h1>
                <p className="mt-2 text-center lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus.</p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pt-14">
            <ServiceCard icon={icon1} title="first Title"/>
            <ServiceCard icon={icon2} title="second Title"/>
            <ServiceCard icon={icon3} title="third Title"/>

        </div>
    </div>
 )
}

export default Services;