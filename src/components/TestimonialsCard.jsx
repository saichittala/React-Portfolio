import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsCard = () => {
  const testimonials = [
    {
      text: "Sai has a deep understanding of both user experience and business goals. His designs improved our dashboard’s clarity and reduced user errors significantly.",
      name: "Ananya Rao",
      role: "Product Manager, CustomFurnish",
    },
    {
      text: "Working with Sai was a great experience. He transformed our concept into a polished, user-friendly tool that saved designers hours each week.",
      name: "Ravi Sharma",
      role: "Design Lead, MyDeziner",
    },
    {
      text: "Professional, thoughtful, and detail-oriented — Sai’s design work consistently elevates our products’ usability and appeal.",
      name: "Priya Mehta",
      role: "Founder, HomeGymr",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section width-450 display-flex fd-c flex-col gap-36 fade-in">

      {/* Heading + Arrows */}
      <div className="display-flex justify-between items-center">
        <a className="fade-in content-div-main-heading-2 translate-text-up">
          Testimonials
        </a>

        <div className="display-flex gap-8">
          <button
            onClick={handlePrev}
            className="btn-4"
          >
            <img src="./img/left-arrow.svg" alt={testimonials[index].name} />
          </button>

          <button
            onClick={handleNext}
            className="btn-4"
          >
            <img src="./img/right-arrow.svg" alt={testimonials[index].name} />
          </button>
        </div>
      </div>

      {/* Carousel - One card only */}
      <div className="relative w-full overflow-hidden min-h-[230px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="testimonial-card">
              <img src="./img/Quote.svg" alt={testimonials[index].name} className="quote-icon" />

              <p className="testimonial-text opacity-90 testimonial-content leading-relaxed">
                “{testimonials[index].text}”
              </p>

              <div className="testimonial-info df-g8 gap-12 mt-3">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="quote-image display-none"
                />

                <div className="df-g8 fd-c">
                  <span className="testimonial-name">{testimonials[index].name}</span>
                  <span className="text-sm opacity-75 testimonial-role">{testimonials[index].role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

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
