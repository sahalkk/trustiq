import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaEye,
  FaChartBar,
  FaCog,
  FaMobile,
} from "react-icons/fa";

const Services: React.FC = () => {
  const services = [
    {
      icon: FaShieldAlt,
      title: "Security Assessment",
      description:
        "Comprehensive security audits to identify vulnerabilities and risks in your systems.",
      features: [
        "Vulnerability scanning",
        "Penetration testing",
        "Risk assessment",
        "Compliance review",
      ],
      price: "Starting at $2,999",
      popular: false,
    },
    {
      icon: FaLock,
      title: "Data Protection",
      description:
        "Advanced encryption and data protection solutions to secure your sensitive information.",
      features: [
        "End-to-end encryption",
        "Data backup",
        "Access controls",
        "Audit logging",
      ],
      price: "Starting at $1,999",
      popular: true,
    },
    {
      icon: FaEye,
      title: "24/7 Monitoring",
      description:
        "Round-the-clock security monitoring with instant threat detection and response.",
      features: [
        "Real-time alerts",
        "Threat intelligence",
        "Incident response",
        "Security analytics",
      ],
      price: "Starting at $4,999",
      popular: false,
    },
    {
      icon: FaChartBar,
      title: "Security Analytics",
      description:
        "Advanced analytics and reporting to track your security posture and performance.",
      features: [
        "Custom dashboards",
        "Performance metrics",
        "Trend analysis",
        "Compliance reporting",
      ],
      price: "Starting at $1,499",
      popular: false,
    },
    {
      icon: FaCog,
      title: "System Integration",
      description:
        "Seamless integration with your existing systems and third-party applications.",
      features: [
        "API integration",
        "Custom connectors",
        "Workflow automation",
        "System migration",
      ],
      price: "Starting at $3,499",
      popular: false,
    },
    {
      icon: FaMobile,
      title: "Mobile Security",
      description:
        "Comprehensive mobile security solutions for iOS and Android applications.",
      features: [
        "App security",
        "Device management",
        "Mobile threat defense",
        "Secure communications",
      ],
      price: "Starting at $2,499",
      popular: false,
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive{" "}
            <span className="gradient-text">Security Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of professional security services designed to
            meet your specific business needs and compliance requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 h-full ${
                  service.popular
                    ? "border-primary-600 ring-2 ring-primary-100"
                    : "border-gray-100"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="inline-flex p-4 rounded-xl bg-primary-100 text-primary-600 mb-4">
                    <service.icon className="text-3xl" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="text-2xl font-bold text-primary-600 mb-6">
                    {service.price}
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? "bg-primary-600 hover:bg-primary-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of experts can create a tailored security solution that
              perfectly fits your business requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Contact Our Experts</button>
              <button className="btn-secondary">Schedule Consultation</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
