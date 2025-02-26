import { useState } from 'react'
import { supabase } from '../supabase'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiLock, FiMail, FiPhone, FiHome, FiArrowRight, FiX } from 'react-icons/fi'

export default function Auth() {
    // ... existing state and functions ...
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const [showVerificationModal, setShowVerificationModal] = useState(false)

    // Modify your signup success handler
    const handleSubmit = async (e) => {
        // ... existing code ...
        e.preventDefault()
        setIsLoading(true)

        try {
            if (isLogin) {
                // Login
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password
                })
                if (error) throw error
                navigate('/services')

            } else {
                // Signup
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                })

                if (error) throw error

                await supabase
                    .from('profiles')
                    .insert({
                        id: data.user.id,
                        name,
                        phone,
                        address,
                        email
                    })

                setShowVerificationModal(true) // Show modal instead of alert
            }
        }
        catch (error) {
            alert(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    // Framer Motion variants को component के अंदर define करें
    const formVariants = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2
            }
        }
    };

    // Add Verification Modal component
    const VerificationModal = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        >
            <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl">
                <button
                    onClick={() => setShowVerificationModal(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                >
                    <FiX className="w-6 h-6" />
                </button>

                <div className="text-center">
                    <div className="mb-6">
                        <div className="bg-purple-100 w-max mx-auto p-4 rounded-full mb-4">
                            <FiMail className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Check Your Email!
                        </h3>
                        <p className="text-gray-600">
                            We've sent a verification link to<br />
                            <span className="font-medium text-purple-600">{email}</span>
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            setShowVerificationModal(false)
                            navigate('/login')
                        }}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all"
                    >
                        Back to Login
                    </button>
                </div>
            </div>
        </motion.div>
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
            {/* Existing form code... */}
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
            >
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h1>
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
                    >
                        <span>{isLogin ? 'Sign Up' : 'Login'}</span>
                        <FiArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                                required
                            />
                        </div>

                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                                required
                            />
                        </div>

                        <AnimatePresence>
                            {!isLogin && (
                                <motion.div
                                    variants={formVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="space-y-4"
                                >
                                    <div className="relative">
                                        <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Full Name"
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="relative">
                                        <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Phone Number"
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                                            required
                                        />
                                    </div>

                                    <div className="relative">
                                        <FiHome className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                        <input
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Address"
                                            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                                            required
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <>{isLogin ? 'Login' : 'Create Account'}</>
                        )}
                    </button>
                </form>
            </motion.div>

            <AnimatePresence>
                {showVerificationModal && <VerificationModal />}
            </AnimatePresence>
        </div>
    )
}