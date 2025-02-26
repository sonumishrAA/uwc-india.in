import { useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Payment() {
    const [amount, setAmount] = useState(0)
    const [loading, setLoading] = useState(false)

    const initiatePayment = async () => {
        setLoading(true)
        const user = supabase.auth.getUser()
        const orderId = `ORDER_${Date.now()}_${user.id}`

        try {
            // Create order in Supabase
            const { data: order, error } = await supabase
                .from('orders')
                .insert([{
                    user_id: user.id,
                    amount,
                    status: 'pending',
                    order_id: orderId
                }])
                .select()
                .single()

            // Initiate PhonePe payment
            const response = await fetch('/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId,
                    amount,
                    userId: user.id
                })
            })

            const paymentData = await response.json()
            window.location.href = paymentData.data.instrumentResponse.redirectInfo.url
        } catch (error) {
            console.error('Payment error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="payment-container">
            <h2>Make Payment</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button onClick={initiatePayment} disabled={loading}>
                {loading ? 'Processing...' : 'Pay with PhonePe'}
            </button>
        </div>
    )
}