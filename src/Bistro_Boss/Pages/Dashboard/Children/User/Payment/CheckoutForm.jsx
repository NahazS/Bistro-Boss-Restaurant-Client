import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import useCart from "../../../../../Hooks/useCart";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import moment from 'moment';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState("")
    const [transactionId, setTransactionId] = useState("")
    const [error, setError] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const {cart, refetch} = useCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const {user} = useContext(AuthContext)
    console.log(user)

    useEffect(() => {
      if(totalPrice > 0){
        axiosSecure.post('/create-payment-intent', {
          price: totalPrice
        })
        .then(res => {
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
      }
    },[axiosSecure, totalPrice])

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        if(!stripe || !elements)
        {
            return
        }
        const card = elements.getElement(CardElement)
        if(card  == null)
        {
            return
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log(error)
            setError(error.message)
        } else{
            console.log(paymentMethod)
            setError('')
        }

        const {paymentIntent, error:PaymentConfirmError} = await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
            card: card,
            billing_details: {
              name: user?.displayName,
              email: user?.email
            }
          }
        })
        if(paymentIntent)
        {
          console.log('paymentIntent', paymentIntent)
          if(paymentIntent.status === "succeeded")
          {
            setTransactionId(paymentIntent.id)

            const payment = {
              email: user.email,
              price: totalPrice,
              time: moment().format('lll'),
              cartIds: cart.map(item => item._id),
              menuIds: cart.map(item => item.menuId),
              status: 'pending',
              transactionId: paymentIntent.id
            }
            const res = await axiosSecure.post('/payment', payment)
            if(res.data.deleteCartResult.deletedCount > 0 && res.data.paymentAddResult.insertedId){
              refetch()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment Successful!",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/dashboard/PaymentHistory')
            }
          }
        }
        else{
          console.log('paymentConfirmError', PaymentConfirmError)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-5">
        <div className="flex w-full gap-4">
            <div className="flex-1 border rounded-md px-4 py-2 shadow-md h-[72px] flex items-center">
              <div className="w-full">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: '20px',
                        color: '#424770',
                        '::placeholder': { color: '#aab7c4' },
                      },
                      invalid: { color: '#9e2146' },
                    },
                  }}
                />
              </div>
            </div>

    
        </div>
      <p className="text-xs text-red-600 font-bold font-Cinzel">{error}</p>
      {transactionId && <p className="text-green-600">Your transaction id is {transactionId}</p>}
      {/* Submit Button */}
      <button
        type="submit"
        disabled={!stripe || !clientSecret}
        className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-md py-3 px-8 w-full max-w-xs"
      >
        Pay
      </button>
    </form>
    );
};

export default CheckoutForm;