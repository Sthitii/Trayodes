'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Gift, Calendar, Mail, Phone, AlertCircle } from 'lucide-react';

const ConsultationForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    countryCode: '+44', // Default to UK
    phone: '',
    service: '',
    note: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "Course Selection Guidance",
    "University Admission Support",
    "Visa & Immigration Help",
    "Accommodation Assistance",
    "Career Preparation",
    "Entrepreneurship Support",
    "Other Query"
  ];

  const countryCodes = [
    { code: '+44', country: 'United Kingdom' },
    { code: '+1', country: 'United States/Canada' },
    { code: '+91', country: 'India' },
    { code: '+61', country: 'Australia' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+971', country: 'UAE' },
    { code: '+65', country: 'Singapore' },
    { code: '+234', country: 'Nigeria' },
    { code: '+27', country: 'South Africa' },
    // Add more as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is being edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    const phoneRegex = /^\d{4,15}$/; // Simple regex for numbers (4-15 digits)
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (digits only)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep2()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // In real implementation:
    // 1. Send form data to your backend
    // 2. Trigger email to user
    // 3. Maybe send notification to your team
    
    // Log the complete form data with country code + phone
    console.log({
      ...formData,
      fullPhone: `${formData.countryCode} ${formData.phone}`
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white relative">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {!isSuccess ? (
              <>
                <Gift className="text-yellow-300" />
                Book Your Free Consultation
              </>
            ) : (
              <>
                <Check className="text-green-300" />
                Success!
              </>
            )}
          </h2>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-black/10"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Progress Steps */}
                <div className="flex justify-between mb-8 relative">
                  <div className="absolute top-1/2 h-1 bg-gray-200 w-full -translate-y-1/2 z-0"></div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                        ${step >= i ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                        {i}
                      </div>
                      <div className="absolute top-full mt-2 text-xs w-24 text-center left-1/2 -translate-x-1/2">
                        {i === 1 && "Your Info"}
                        {i === 2 && "Service"}
                        {i === 3 && "Complete"}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Step 1: Contact Info */}
                {step === 1 && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`text-black w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && (
                        <div className="text-red-500 text-sm flex items-center gap-1 mt-1">
                          <AlertCircle size={14} />
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="flex gap-2">
                        <div className="relative w-1/3">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="text-black w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjEwMTcyNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-no-repeat bg-[right_0.25rem_center] bg-[length:18px_18px]"
                          >
                            {countryCodes.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.code} ({country.country})
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="relative flex-1">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`text-black w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                            placeholder="123 456 7890"
                          />
                        </div>
                      </div>
                      {errors.phone && (
                        <div className="text-red-500 text-sm flex items-center gap-1 mt-1">
                          <AlertCircle size={14} />
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                      Continue <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}

                {/* Step 2: Service Selection */}
                {step === 2 && (
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Select Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`text-black w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjEwMTcyNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwb2x5bGluZSBwb2ludHM9IjYgOSAxMiAxNSAxOCA5Ij48L3BvbHlsaW5lPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center] ${errors.service ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                      >
                        <option value="">Choose a service</option>
                        {services.map((service, i) => (
                          <option key={i} value={service}>{service}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <div className="text-red-500 text-sm flex items-center gap-1 mt-1">
                          <AlertCircle size={14} />
                          {errors.service}
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-sm font-medium text-gray-700">Additional Notes</label>
                      <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Tell us more about your needs..."
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        ) : (
                          <>
                            Submit <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6"
              >
                <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Check className="text-green-600" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  We've received your request. Our team will contact you within 24 hours to schedule your free consultation.
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  <span className="font-medium">Bonus:</span> Check your email for a special student resource package!
                </p>
                <button
                  onClick={onClose}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ConsultationForm;