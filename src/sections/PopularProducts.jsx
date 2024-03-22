import { products } from "../constants"; //is an object
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    
      <section id="products"
      className="max-container max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5"> {/* for title and subtitle */}
          <h2 className="text-4xl font-bold font-palanquin">Our <span className="text-coral-red">Popular </span>
          Products</h2>
          <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and style with our sought after
          selections. Discover a world of comfort, design and value.</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grids-cols-3 sm:grid-col-2 grid-cols-1 sm:gap-6 gap-14">
         {/*for the cards*/}
          {products.map((product,index)=>(
            <PopularProductCard 
            key= {index}
            {...product}
            />
          ))}
        </div>
      </section>
    
  )
}

export default PopularProducts;