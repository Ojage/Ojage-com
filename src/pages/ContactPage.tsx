import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';
import { SITE_CONFIG } from '../lib/constants/config';
import SEO from '../components/seo/SEO';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with OJAGE"
        description="Have questions, suggestions, or want to collaborate? Contact the OJAGE team. We'd love to hear from researchers, developers, and language enthusiasts."
        keywords="contact OJAGE, collaboration, partnership, inquiries, support"
        url={`${SITE_CONFIG.url}/contact`}
      />
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Have questions, suggestions, or want to collaborate? We'd love to hear from you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiMail className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  <a
                    href={`mailto:contact@${SITE_CONFIG.url.replace('https://', '')}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
                  >
                    contact@ojage.com
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                <FiSend className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}

