import React from 'react';

const Card = ({data}) => {
  const {_id,name,price,img,quantity,category} = data
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {name}
      <div className="badge badge-secondary">{quantity}</div>
    </h2>
    <p>{category}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">${price}</div> 
      <div className="badge badge-outline"><button>Buy</button></div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;