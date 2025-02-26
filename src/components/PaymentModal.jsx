import React from 'react';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const PaymentModal = ({
    show,
    onClose,
    service,
    language,
    formData,
    onChange,
    onSubmit,
    isLoading
}) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full relative transform transition-all">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                >
                    <FaTimes className="w-6 h-6" />
                </button>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    {language === 'en' ? 'Payment Details' : 'भुगतान विवरण'}
                </h2>

                <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-3">
                        <div>
                            <label className="block text-left text-gray-700 mb-1">
                                {language === 'en' ? 'Full Name' : 'पूरा नाम'}
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => onChange('name', e.target.value)}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-left text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => onChange('email', e.target.value)}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-left text-gray-700 mb-1">
                                {language === 'en' ? 'Phone Number' : 'फ़ोन नंबर'}
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => onChange('phone', e.target.value)}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                pattern="[0-9]{10}"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-left text-gray-700 mb-1">
                                {language === 'en' ? 'Address' : 'पता'}
                            </label>
                            <textarea
                                value={formData.address}
                                onChange={(e) => onChange('address', e.target.value)}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                                required
                            />
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg flex items-center gap-3">
                            <FaCheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                            <div>
                                <p className="font-semibold text-gray-800">
                                    {service?.name[language]}
                                </p>
                                <p className="text-gray-600">
                                    ₹{service?.price} {service?.unit && `(${service.unit})`}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                {language === 'en' ? 'Processing...' : 'प्रोसेस हो रहा है...'}
                            </div>
                        ) : (
                            language === 'en' ? 'Pay Now' : 'अभी भुगतान करें'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

PaymentModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    service: PropTypes.object,
    language: PropTypes.oneOf(['en', 'hi']).isRequired,
    formData: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        address: PropTypes.string
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
};

export default PaymentModal;