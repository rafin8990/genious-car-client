import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {

    const serviceDetails = useLoaderData();
    const {_id, title, price } = serviceDetails
    const { user } = useContext(AuthContext);


    const handlePlaceOrder=event=>{
        event.preventDefault()
        const form=event.target;
        const name =`${form.firstName.value} ${form.lastName.value}`
        const email= user?.email || 'unregister';
        const message= form.message.value;
        const phone=form.phone.value;

        const order ={
            service: _id,
            serviceNmae: title,
            price,
            customer: name,
            email, 
            phone,
            message
        }

        // if(phone.length>10){
        //     alert
        // }
        //else{

        //}
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=> {
            if(data.acknowledged){
                console.log(data)
                form.reset();
                alert('Order Placed Successfully')
            }
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className='container mx-auto'>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>You are about to: {title}</h2>
                <div className='grid grid-cols-1 md: grid-cols-2 gap-5 m-10'>
                    <input type="text" name='firstName' placeholder="First Name" className="input input-bordered w-full text-2xl" />
                    <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered w-full text-2xl" />
                    <input type="text" name='email' placeholder="Your Email" readOnly defaultValue={user?.email} className="input input-bordered w-full  text-2xl" />
                    <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered w-full text-2xl" required />
                </div>
                <div>
                    <textarea className="textarea textarea-bordered w-full text-2xl" name='message'   placeholder="Your Message"></textarea>
                </div>
                <div className='my-5'>
                    <button type='submit' className='btn '>Place Your Order </button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;