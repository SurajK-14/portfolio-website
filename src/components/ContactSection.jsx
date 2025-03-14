import React, { useState } from 'react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Here you would typically send the email using your backend service
      // For now, we'll simulate a successful send
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={`py-16 section-transition`}>
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="project-card bg-white p-8 rounded-xl">
          <h4 className="text-xl font-semibold mb-6">Send me a Message</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--secondary)] transition-colors disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm mt-2">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
        <div className="project-card bg-white p-8 rounded-xl">
          <h4 className="text-xl font-semibold mb-6">Schedule a Meeting</h4>
          <p className="text-gray-700 mb-6">
            Prefer to have a conversation? Schedule a meeting with me through Calendly.
          </p>
          <div className="calendly-inline-widget" data-url="https://calendly.com/your-username" style={{minWidth: '320px', height: '450px'}}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;