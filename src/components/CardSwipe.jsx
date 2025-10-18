import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards, Autoplay, Navigation, Pagination } from "swiper/modules"
import { SparklesIcon } from "lucide-react"

import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/effect-coverflow"

function Badge({ children, className = "" }) {
  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-pink-100 text-pink-700 ${className}`}>
      {children}
    </span>
  )
}

/**
 * @param {Object} props
 * @param {{ src: string, alt: string, title?: string, year?: string }[]} props.images
 * @param {number} [props.autoplayDelay]
 * @param {boolean} props.slideShadows
 */
export const CardSwipe = ({
  images,
  autoplayDelay = 2000,
  slideShadows = true,
    onRequestLockPopup, 

}) => {
  const css = `
    .swiper {
      width: 100%;
      padding-bottom: 60px;
    }

    .swiper-slide {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.12);
      transition: transform 0.3s ease;
      background-color: #111;
      border: 1px solid var(--border-color);
    }

    .swiper-slide:hover {
      .ps-24 {
        opacity: 1;
        width: fit-content;
        height: fit-content;

    right: 24px;
    top: -300px;
      }
    }

    .swiper-slide:hover {
      transform: scale(1.05);
    }

    .slide-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 24px;
      aspect-ratio: 1;
    }

    .slide-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 96px 24px 24px 24px;
      background: linear-gradient(180deg, transparent, rgba(0,0,0,0.99));
      color: white;
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-radius: 0 0 24px 24px;
    }

    .slide-title {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-transform: capitalize;
    text-align: left;
    line-height: 1.7;
    }

    .slide-year {
    font-size: 14px;
    font-weight: 300;
    color: #909090;
    text-transform: capitalize;
    text-align: left;
    line-height: 1.7;
    }

    .ps-24 {
    opacity: 0;
    position: absolute;
    right: 24px;
    top: -290px;
    width: fit-content;
    height: fit-content;
    padding: 4px 4px 4px 14px;
    border-radius: 99px;
    font-size: 14px;
    transition: all 0.3s ease;
    img {
      width: 12px;
      height: 12px;
    }
    .bubble-button__icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 !important;
    }

    @media (max-width: 674px) {
    .slide-image {
    aspect-ratio: 0.75;
    }
    }
  `

  return (
    <section className="w-full py-8">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-5xl">
        <Swiper
          autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
          effect="cards"
          grabCursor
          slidesPerView="auto"
          rewind
          // loop
          cardsEffect={{ slideShadows }}
          modules={[EffectCards, Autoplay, Pagination, Navigation]}
        >
          {images.map((card, index) => (
            <SwiperSlide key={index} className="relative cursor-pointer"
              onClick={() => {
                if (card.locked) {
                  onRequestLockPopup?.(card.link, card.password)
                } else {
                  window.open(card.link, "_blank")
                }
              }}
            >
              <img src={card.src} alt={card.alt} className="slide-image w-full h-full object-cover rounded-xl" />
              <div className="slide-overlay absolute bottom-4 left-4 text-white">
                {card.title && <div className="slide-title font-bold text-lg">{card.title}</div>}
                {card.year && <div className="slide-year text-sm opacity-80">{card.year}</div>}
                <button className="btn-4 ps-24">
                  <span>View</span>
                  <div className="bubble-button__icon">
                    <img src="img/open-web.svg" alt="Arrow" />
                  </div>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}