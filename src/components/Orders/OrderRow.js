import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const OrderRow = ({order, handleDelete,handleUpdated}) => {
const {_id, service,serviceNmae, customer, price,status}=order

const [serviceDetails, setServiceDetails]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[service])

    return (
        <div>
            <tr>
        <th>
          <label>
            <button onClick={()=>handleDelete(_id)} className='btn btn-ghost '>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-32 h-32">
                <img src={serviceDetails?.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceNmae}</div>
              <div className="text-sm opacity-50">{customer}</div>
            </div>
          </div>
        </td>
        <td>
          <br/>
        </td>
        <td>{price}</td>
        <th>
          <button onClick={()=>handleUpdated(_id)} className="btn btn-ghost btn-xs">{status?status : 'Panding'}</button>
        </th>
      </tr>
        </div>
    );
};

export default OrderRow;