import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaEye, FaChartLine, FaCog, FaMobileAlt } from 'react-icons/fa';

const Features: React.FC = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: 'Advanced Security',
      description: 'Multi-layered security architecture with real-time threat detection and prevention.',
      color: 'primary'
    },
    {
      icon: FaLock,
      title: 'Data Encryption',
      description: 'End-to-end encryption ensuring your data remains secure at all times.',
      color: 'accent'
    },
    {
      icon: FaEye,
      title: 'Real-time Monitoring',
      description: '24/7 monitoring with instant alerts and comprehensive security analytics.',
      color: 'primary'
    },
    {
      icon: FaChartLine,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and reporting to track your security posture.',
      color: 'accent'
    },
    {
      icon: FaCog,
      title: 'Easy Integration',
      description: 'Seamless integration with existing systems and third-party applications.',
      color: 'primary'
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile Ready',
      description: 'Full mobile support with responsive design and native app capabilities.',
      color: 'accent'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for{' '}
            <span className="gradient-text">Modern Security</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of security tools and features provides everything 
            you need to protect your business and build trust with your customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  feature.color === 'primary' 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'bg-accent-100 text-accent-600'
                }`}>
                  <feature.icon className="text-2xl" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-6">
                  <div className={`w-12 h-1 rounded-full ${
                    feature.color === 'primary' ? 'bg-primary-600' : 'bg-accent-600'
                  } group-hover:w-16 transition-all duration-300`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses that trust TrustIQ to protect their digital assets 
              and maintain the highest security standards.
            </p>
            <button className="btn-primary">
              Start Your Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
