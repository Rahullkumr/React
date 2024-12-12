import { useState } from "react";

const UseStateEx6Api = () => {
    const products = [
        {
          id: 1,
          name: "Wireless Earbuds",
          description: "High-quality sound with noise cancellation.",
          price: 49.99,
          image: "https://picsum.photos/250/100?random=1",
        },
        {
          id: 2,
          name: "Smart Watch",
          description: "Fitness tracking with heart rate monitor.",
          price: 99.99,
          image: "https://picsum.photos/250/100?random=2",
        },
        {
          id: 3,
          name: "Gaming Keyboard",
          description: "Mechanical keyboard with RGB lighting.",
          price: 69.99,
          image: "https://picsum.photos/250/100?random=3",
        },
        {
          id: 4,
          name: "Bluetooth Speaker",
          description: "Portable speaker with deep bass.",
          price: 39.99,          
          image: "https://picsum.photos/250/100?random=4",
        },
        {
          id: 5,
          name: "Smartphone Stand",
          description: "Adjustable stand for desk or table.",
          price: 14.99,
          image: "https://picsum.photos/250/100?random=5",
        },
      ];
      
      
      
//   useState will also accept: [], {}, [{},{},{}]
  return (
      <div style={
        {
            display: 'flex',
            border: '1px solid black'
        }
    }>
        {
            products.map((val, ind)=>{
                return <div key={ind}>
                    <img src={val.image} />
                    <p>{val.name}</p>
                    <p>{val.description}</p>
                    <p>{val.price}</p>
                </div>
            })
        }
      </div>
  );
};
export default UseStateEx6Api;
