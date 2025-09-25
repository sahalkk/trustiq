import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaGlobe, FaRocket, FaCheckCircle } from 'react-icons/fa';

const About: React.FC = () => {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: FaAward },
    { number: '10K+', label: 'Happy Clients', icon: FaUsers },
    { number: '50+', label: 'Countries Served', icon: FaGlobe },
    { number: '99.9%', label: 'Success Rate', icon: FaRocket }
  ];

  const values = [
    'Advanced threat detection and prevention',
    '24/7 monitoring and support',
    'Compliance with industry standards',
    'Scalable solutions for any business size',
    'Expert security consultation',
    'Regular security audits and updates'
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <FaAward />
                <span>About TrustIQ</span>
              </motion.div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Leading the Future of{' '}
                <span className="gradient-text">Digital Security</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At TrustIQ, we're dedicated to providing cutting-edge security solutions 
                that protect businesses from evolving cyber threats. Our team of experts 
                combines advanced technology with deep industry knowledge to deliver 
                comprehensive security solutions.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe that trust is the foundation of every successful business relationship. 
                That's why we've built our platform to not only protect your data but also 
                enhance your reputation and build confidence with your customers.
              </p>
            </div>

            {/* Values List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why Choose TrustIQ?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <FaCheckCircle className="text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="inline-flex p-3 rounded-xl bg-primary-100 text-primary-600 mb-4">
                      <stat.icon className="text-2xl" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed">
                To empower businesses with the most advanced security solutions, 
                enabling them to operate confidently in an increasingly complex 
                digital world while building lasting trust with their customers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
