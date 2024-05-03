import React from "react";
import AboutImage from "../../components/images/medical-banner-with-stethoscope.jpg";
import './about.css';
const About=()=>{
    return( 
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-15 big-box">
        <div className="w-full lg:w-3/4 space-y-4 about-box text-contactColor">
          <h1 className="text-4xl font-semibold text-center lg:text-start about-head">About Us</h1>
          <p className="text-justify lg:text-start para">Lorem ipsum dolor  ab dolores quaerat mollitia delectus, blanditiis et minima non ducimus doloribus incidunt saepe earum corporis accusamus inventore. Dolores iusto nobis beatae aut quia mollitia ab, corporis optio et eaque, in adipisci accusamus minima dolore maiores sapiente quidem tempore, officiis fugiat inventore ipsam facilis odit impedit? A consequuntur in harum!</p>
          <p className="text-justify lg:text-start para">Lorem ipsum dolor  eos sed nihil, adipisci quas qui error! Quia rerum praesentium id nisi labore explicabo quod eligendi, saepe porro culpa libero cupiditate odio molestias itaque nesciunt? Provident exercitationem eius odio quod natus? Delectus laboriosam a neque vel ad odit consectetur veniam, rerum quos repudiandae oribus distinctio praesentium nobis cumque officia?</p>
          <p className="text-justify lg:text-start para">Lorem ipsum, dolor  minus tenetur, quaerat, expedita ipsa quibusdam adipisci. Tempore maxime quibusdam nulla nesciunt. Odit aliquam deleniti distinctio facilis nisi ipsam praesentium eveniet eligendi ducimus cumque fugiat quis nesciunt est quasi quam esse reprehenderit, , beatae fugiat cupiditate voluptas ipsa natus repellendus sit voluptate, harum voluptatem labore.</p>
        </div>
        <div className="w-full lg:w-3/4">
        <img src={AboutImage} className="rounded-lg iimg" />
        </div>
    </div> );
}

export default About;