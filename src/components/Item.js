import React from 'react'

function Item () {
  return (
    <div className="col mb-4">
      <div className="card">
        <img
          src="https://lh3.googleusercontent.com/8I34O2iIvIgalfXnpIO2QH2e15a4eZbJtFsnMsmiXev6efKohqj9fuw2LfGXa08s0AznOE-kFw=w440-h280-e365"
          className="card-img-top"
          alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <a href="#" className="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    </div>
  )
}

export default Item
