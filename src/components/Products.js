import React from 'react';

const Products = ({ items, add, subtract }) => {
  return (
    <div>
      <h2
        id="product-header"
        style={{
          margin: '20px',
        }}
      >
        Product List <span>({items.length})</span>
      </h2>

      <div className="row row-cols-1 row-cols-md-4">
        {items.map(item => {
          return (
            <div
              className="col mb-4"
              key={item.id}
              style={
                item.numberInStock > 0 ? { display: '' } : { display: 'none' }
              }
            >
              <div
                className="card h-100"
                style={{
                  margin: '10px',
                  backgroundColor: 'lightBlue',
                }}
              >
                <div
                  className="card-body"
                  style={
                    item.numberInStock > 3
                      ? { color: 'purple' }
                      : { color: 'red' }
                  }
                >
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.numberInStock} in Stock</p>
                  <div>
                    <button onClick={() => subtract(item)}>-</button>
                    <button
                      disabled={item.numberInStock > 9}
                      onClick={() => add(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

//<div class="row row-cols-1 row-cols-md-3">
//  <div class="col mb-4">
//    <div class="card h-100">
//      <img src="..." class="card-img-top" alt="...">
//      <div class="card-body">
//        <h5 class="card-title">Card title</h5>
//        <p class="card-text">This is a </p>
//      </div>
//    </div>
//  </div>
//</div>

export default Products;
