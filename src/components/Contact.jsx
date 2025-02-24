import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ofnpmmgxuhegvgtgrisz.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Contact() {
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.from('MessageList').insert([formData]);

      if (error) {
        console.error('Error saving message:', error);
        showNotification('Failed to save message. Please try again.', 'error');
      } else {
        showNotification('Message sent successfully!', 'success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      showNotification('An unexpected error occurred.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary/50">
      <div className="container mx-auto px-4 relative">
        <AnimatePresence>
          {notification.show && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 60 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
                notification.type === 'success' 
                  ? 'bg-green-500' 
                  : 'bg-red-500'
              } text-white`}
            >
              {notification.message}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-secondary">Contact Me</h2>
          <p className="mb-6 text-gray-400">
            Mail me at <a href="mailto:pradipbade7@gmail.com" className="text-secondary underline">pradipbade7@gmail.com</a> or through the contact form
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-left">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 bg-white text-black rounded-lg 
      focus:outline-none focus:ring-2 focus:ring-green-500 
      focus:border-transparent transition-all duration-300 
      shadow-sm hover:shadow-md"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-2 text-left">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 bg-white text-black rounded-lg 
      focus:outline-none focus:ring-2 focus:ring-green-500 
      focus:border-transparent transition-all duration-300 
      shadow-sm hover:shadow-md"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-2 text-left">Message</label>
              <textarea
                required
                className="w-full px-4 py-2 bg-white text-black rounded-lg 
      focus:outline-none focus:ring-2 focus:ring-green-500 
      focus:border-transparent transition-all duration-300 
      shadow-sm hover:shadow-md"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-700 text-white font-bold rounded-lg 
    hover:bg-green-600 transition-all duration-300 
    shadow-sm hover:shadow-lg hover:shadow-green-500/50 
    focus:outline-none focus:ring-2 focus:ring-green-500 
    transform hover:scale-[1.02]"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}