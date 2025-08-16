import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay, Navigation, Pagination } from "swiper/modules"
import { SparklesIcon } from "lucide-react"

import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/effect-coverflow"

// Minimal badge replacement
function Badge({ children, className = "" }) {
  return (
    <span className={`px-2 py-1 text-xs rounded-md bg-gray-200 text-gray-700 ${className}`}>
      {children}
    </span>
  )
}

/**
 * @param {Object} props
 * @param {{ src: string, alt: string }[]} props.images
 * @param {number} [props.autoplayDelay]
 * @param {boolean} props.slideShadows
 */
export const CardSwipe = ({
  images,
  autoplayDelay = 1500,
  slideShadows = false,
}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
    }
    
    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 18px;
      font-size: 22px;
      font-weight: bold;
      color: #fff;
    }
    
    .swiper-slide img {
      display: block;
      width: 100%;
      aspect-ratio: 1;
      border-radius: var(--border-radius-1);
      object-fit: cover;
    }
  `

  return (
    <section className="w-full space-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-100 p-4 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-6">
          

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect="cards"
                grabCursor
                loop
                slidesPerView="auto"
                rewind
                cardsEffect={{
                  slideShadows: slideShadows,
                }}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
