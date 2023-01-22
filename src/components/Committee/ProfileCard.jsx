import {React,useState} from "react"
import {Icon} from "@iconify/react"
import img from "../Committee/images/psood.jpg"
export default function ProfileCard() {
     const people = [
            {
              id: 1,
              name: "Devanshi Patel",
              position: "EM Head",
            },
            {
              id: 2,
              name: "Riya Sharma",
              position: "President",
            },
            {
              id: 3,
              name: "Jeet Davda",
              position: "VP",
            },
          ]
        
          let [current, setCurrent] = useState(0)
        
          const studList = people.map((people) => {
            return (
              <div
                key={people.id}
                className={
                  "xs:w-4/5 relative w-full rounded-2xl  py-8   drop-shadow-md sm:w-[85%] xl:px-11"
                }>
       
      <section class=" w-full lg:w-1/2 px-5 py-5 text-center bg-gray-600 hover:bg-primary hover:text-black rounded-[2rem] duration-200 shadow-lg p-8">  
     <div class="w-7/12 text-center max-w-md ml-auto mr-auto mt-8">   
         
          <div class="rounded-full border-2 border-black h-[16rem] w-[16rem] flex items-center text-center justify-center bg-grey-light mx-auto mt-6 mb-8"><img class="rounded-full" src={img}/></div>

          <div class="font-Abel font-bold text-3xl text-black mb-2">{people.name}</div>

          <p class="text-grey-darker -translate-y-1 text-base mb-4">{people.position}</p>

          <div class="bg-black hover:bg-blue font-Abel cursor-pointer text-white text-lg rounded-full font-semibold  hover:text-primary py-2 px-4 border border-black">Contact</div>
        
  </div>
</section>
</div>
 )
          })
          return (
            <div className=" bg-black pb-8 btwnMdAndLg:pt-10">
              <div className=" w-full relative mt-8 flex items-center justify-center sm:p-10 md:mt-0 md:px-5 lg:px-8">
                <div className=" ml-3 lg:hidden">
                  <Icon
                    icon="ic:baseline-chevron-left"
                    className="cursor-pointer rounded-full bg-secondary-15 p-1 pl-0 text-5xl"
                    color="#B69575"
                    onClick={() => {
                      if (current === 0) {
                        current = studList.length
                      }
                      setCurrent(current - 1)
                    }}
                  />
                </div>
                {/* All Testimonials */}
                <div className="w-full relative bg-black flex justify-center lg:hidden">
                  {studList[current]}
                </div>
                <div className="hidden lg:flex  md:gap-4 lg:mx-auto lg:w-[90%] lg:gap-8">
                  {studList}
                </div>
                <div className="mr-3 lg:hidden">
                  <Icon
                    icon="ic:baseline-chevron-right"
                    color="#B69575"
                    className="cursor-pointer rounded-full bg-secondary-15 p-1 pr-0 text-5xl"
                    onClick={() => {
                      if (current === studList.length - 1) {
                        current = -1
                      }
                      setCurrent(current + 1)
                    }}
                  />
                </div>
              </div>
            </div>
          )
}

 
