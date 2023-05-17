import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Order() {
  // HOOKS
  const test = useSelector((state) => state.eCommerce.testReducer);
  const { userDetail } = useSelector((state) => state.eCommerce);
  // HOOKS

  // LIFE CYCLE
  useEffect(() => {
    fetchOrder();
  }, [userDetail]);
  // LIFE CYCLE
  // STATE
  const [orders, setOrders] = useState([]);
  // STATE

  //METHODS
  const fetchOrder= async () => {

    const result = await axios.get(
      `http://localhost:4000/getOrder/${userDetail.id}`
    );
    if(result.status == 201){
    setOrders(result.data)
    }else{
      console.log("something went wrong")
    }
  };
  //METHODS

  return (
    <div>
    <OrderCard/>
    </div>
  );
}


const OrderCard = ()=>{

  return(
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </>
  )
}

export default Order;
