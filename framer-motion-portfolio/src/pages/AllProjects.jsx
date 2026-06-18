import React from 'react'
import Work1 from "../assets/work1.jpg";
import Work2 from "../assets/work2.jpg";
import Work3 from "../assets/work3.jpg";
import Work4 from "../assets/work4.jpg";
const AllProjects = () => {
    const allProducts = [ {
          title: "BloomCare - Mental Health App Landing Page",
          desc: "Emotional Engine for Your Personal Growth",
          studio: "Kumpin Studio",
          tag: "Real Project",
          img: Work1,
        },
        {
          title: "FragWater - Luxury Fragrance Landing Page",
          desc: "Premium Unisex Fragrance",
          studio: "Kumpin Studio",
          tag: "Exploration",
          img: Work2,
        },
        {
          title: "BloomCare - Mental Health App Landing Page",
          desc: "Emotional Engine for Your Personal Growth",
          studio: "Kumpin Studio",
          tag: "Exploration",
          img: Work3
        },
        {
          title: "FragWater - Luxury Fragrance Landing Page",
          desc: "Premium Unisex Fragrance",
          studio: "Kumpin Studio",
          tag: "Real Project",
          img: Work4,
        }, {
              title: "BloomCare - Mental Health App Landing Page",
              desc: "Emotional Engine for Your Personal Growth",
              studio: "Kumpin Studio",
              tag: "Real Project",
              img: Work1,
            },
            {
              title: "FragWater - Luxury Fragrance Landing Page",
              desc: "Premium Unisex Fragrance",
              studio: "Kumpin Studio",
              tag: "Exploration",
              img: Work2,
            },
            {
              title: "BloomCare - Mental Health App Landing Page",
              desc: "Emotional Engine for Your Personal Growth",
              studio: "Kumpin Studio",
              tag: "Exploration",
              img: Work3
            },
            {
              title: "FragWater - Luxury Fragrance Landing Page",
              desc: "Premium Unisex Fragrance",
              studio: "Kumpin Studio",
              tag: "Real Project",
              img: Work4,
            },]
  return (
   <section className="w-[95%] m-auto py-5">
    <h1 className="text-3xl md:text-6xl font-bold mb-12">
        All Products
    </h1>
    <div className="grid md:grid-cols-3 gap-8">
        {allProducts.map((proj,index)=>(
            <div key={index} className="rounded-xl overflow-hidden shadow">
                <img src={proj.img} alt={proj.title} className='w-full h-[220px] object-cover'/>
                <h3 className='text-xl font-semibold mt-2 p-4'>{proj.title}</h3>
            </div>
        ))}
    </div>
   </section>
  )
}

export default AllProjects
