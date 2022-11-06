import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState();

    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure to delete this')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                        const remaining = orders.filter(odr => odr?._id !== id)
                        setOrders(remaining);
                    }
                })


        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user?.email])

    const handleUpdated = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);

                    approving.status='Approved'
                    const newOrders=[remaining, ...orders]
                    setOrders(newOrders)
                }
            })
    }
    return (
        <div className='container mx-auto'>
            <h3 className='text-5xl'>You have {orders?.length} orders</h3>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <tbody>
                        {
                            orders?.map(order => <OrderRow
                                key={order?._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleUpdated={handleUpdated}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;