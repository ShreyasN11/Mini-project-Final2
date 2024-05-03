import React from "react";

const ServicesCard = ({icon,title}) =>{
    return(
<div className="group service-card flex flex-col item-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out ">
   <div className="bg-[#fff] p-3 rounded-full transiton-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
      {icon}
   </div>
   <h1 className="font-semibold text-lg">{title}</h1>
   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptatem quia velit aperiam laboriosam voluptatibus voluptate itaque autem tenetur nostrum.</p>
    <h3 className="text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">Learn more</h3>
</div>
    );
}

export default ServicesCard;