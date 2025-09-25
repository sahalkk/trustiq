import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content:
        "TrustIQ has transformed our security posture. Their 24/7 monitoring and rapid response capabilities have given us peace of mind.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Security Director, FinanceFirst",
      company: "FinanceFirst",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content:
        "The integration was seamless and their support team is exceptional. We've seen a 90% reduction in security incidents.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "IT Manager, RetailMax",
      company: "RetailMax",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content:
        "Outstanding service and cutting-edge technology. TrustIQ helped us achieve compliance and build customer trust.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "CEO, StartupXYZ",
      company: "StartupXYZ",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content:
        "As a startup, we needed affordable yet robust security. TrustIQ delivered exactly what we needed.",
      rating: 5,
    },
    {
      name: "Lisa Wang",
      role: "VP Security, GlobalTech",
      company: "GlobalTech",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      content:
        "The analytics dashboard provides incredible insights. We can now make data-driven security decisions.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "IT Director, HealthCare Plus",
      company: "HealthCare Plus",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content:
        "HIPAA compliance was our biggest challenge. TrustIQ made it simple and stress-free.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say
            about their experience with TrustIQ security solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>

                <FaQuoteLeft className="text-primary-600 text-2xl mb-4" />

                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary-600 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  98%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  4.9/5
                </div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  95%
                </div>
                <div className="text-gray-600">Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  24h
                </div>
                <div className="text-gray-600">Response Time</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
