import React from "react";

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
    {
      text: "Sai is an exceptionally talented designer who bridges the gap between complex user requirements and clean, modern aesthetics. His design system work saved our development team countless hours. He is proactive, highly collaborative, and receptive to feedback. Highly recommended!",
      name: "Sarah Jenkins",
      role: "Head of Product, FinStream",
    },
    {
      text: "Working with Sai was a game-changer for our mobile app redesign. He has a rare ability to translate messy brainstorms into sleek, intuitive interfaces. His interactive prototypes were incredibly detailed and helped us align the stakeholders instantly. An absolute pleasure to work with.",
      name: "Marcus Chen",
      role: "Co-Founder, Hatchly",
    },
    {
      text: "Sai's dedication to user research and visual excellence really set him apart. He redesigned our B2B dashboard, making complex analytics clear and actionable for our customers. He iterates quickly and delivers top-notch files that are ready for implementation. We'll definitely work together again.",
      name: "Elena Rostova",
      role: "VP of Design, ApexSaaS",
    },
  ];

  return (
    <section className="testimonials-section display-flex fd-c flex-col gap-36 fade-in">
      {/* Heading */}
      <div className="display-flex justify-between items-center">
        <a className="fade-in content-div-main-heading-2 translate-text-up">
          Testimonials
        </a>
      </div>

      {/* Marquee Wrapper */}
      <div className="testimonials-marquee-container">
        <div className="testimonials-marquee-track">
          <div className="testimonials-marquee-group">
            {testimonials.map((t, i) => (
              <div key={`g1-${i}`} className="testimonial-card">
                <img src="img/quote.svg" alt="quote" className="quote-icon" />
                <p className="testimonial-text">
                  “{t.text}”
                </p>
                <div className="testimonial-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="text-sm opacity-75 testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials-marquee-group" aria-hidden="true">
            {testimonials.map((t, i) => (
              <div key={`g2-${i}`} className="testimonial-card">
                <img src="img/quote.svg" alt="quote" className="quote-icon" />
                <p className="testimonial-text">
                  “{t.text}”
                </p>
                <div className="testimonial-info">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="text-sm opacity-75 testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TestimonialsCard);