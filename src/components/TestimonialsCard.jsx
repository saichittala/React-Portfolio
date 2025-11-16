import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialsCard = () => {
  const testimonials = [
    {
      text: "Sai delivered outstanding results with complete professionalism. His attention to detail and patience made the entire process smooth and stress-free. The final outcome was far better than expected. If you want reliable, high-quality work, I strongly recommend Sai - you won’t be disappointed.",
      name: "Boyapati Ravi Kumar",
      role: "Senior Consultant, Visa",
    },
    {
      text: "Thank you for your great effort. The work was completed perfectly. Sai paid attention to every detail and even the smallest adjustments, and he had the patience to work through everything. Thank you… There will definitely be more work between us, and I highly recommend him.",
      name: "Abydas Abu",
      role: "CEO, Yalla Gai",
    },
  ];

  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const t = setInterval(goNext, 10000);
    return () => clearInterval(t);
  }, []);

  // Detect swipe direction
  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;

    // If swiped left → next
    if (swipe < -50) {
      goNext();
    }

    // If swiped right → previous
    if (swipe > 50) {
      goPrev();
    }
  };

  return (
    <section className="testimonials-section width-450 display-flex fd-c flex-col gap-36 fade-in">

      {/* Heading + Arrows */}
      <div className="display-flex justify-between items-center">
        <a className="fade-in content-div-main-heading-2 translate-text-up">
          Testimonials
        </a>

        <div className="display-flex gap-8">
          <button onClick={goPrev} className="btn-4">
            <img src="img/left-arrow.svg" alt="prev" />
          </button>

          <button onClick={goNext} className="btn-4">
            <img src="img/right-arrow.svg" alt="next" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden min-h-[230px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            dragElastic={0.3}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45 }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <div className="testimonial-card">
              <img src="img/quote.svg" alt="quote" className="quote-icon" />

              <p className="testimonial-text opacity-90 testimonial-content leading-relaxed">
                “{testimonials[index].text}”
              </p>

              <div className="testimonial-info df-g8 gap-12 mt-3">
                <div className="df-g8 fd-c">
                  <span className="testimonial-name">{testimonials[index].name}</span>
                  <span className="text-sm opacity-75 testimonial-role">{testimonials[index].role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="df-g8 width-100 jc-c">
        <div className="display-flex justify-center items-center testimonial-count gap-8 mt-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                bubble-dots
                ${i === index ? "bubble-dots-active" : "bubble-dots-inactive"}
              `}
            ></button>
          ))}
        </div>
      </div>

    </section>
  );
};

export default TestimonialsCard;
