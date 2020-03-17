import React from 'react';

function CartItem(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img src={props.item.image} className="card-img p-2" alt={props.item.title}/>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.item.title}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="col-md-2 text-right m-3">
          $ {props.item.price}
          <div className='mt-3 mb-3'>
            <button className="btn btn-info btn-sm mr-2">-</button>
            {props.item.count}
            <button className="btn btn-info btn-sm ml-2">+</button>
          </div>
          <button className="btn btn-danger btn-sm ml-2">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
