const ProductList = () => {
    return (  
      <>
      <div className="details-wrapper">
      <p className="details-company">Sneaker Company</p>
      <h1 className="details-product-name">Fall Limited Edition Sneakers</h1>
      <p className="details-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="price">
        <h2 className="price-new">
          $125.00 <span className="discount">50%</span>
        </h2>
        <p className="price-old">$250.00</p>
      </div>

      <div className="buy">
        <div className="quantity-btns">
          <button className="minus-btn" onClick={handleSubstract}>
            <img src="./images/icon-minus.svg" alt="minus" />
          </button>
          <input
            type="number"
            name="number"
            value={count}
            id="number"
            onChange={handleInputChange}
            min="0"
          />
          <button className="plus-btn" onClick={handleAdd}>
            <img src="./images/icon-plus.svg" alt="plus" />
          </button>
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          <img src="./images/icon-cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </div>
    <h1>hello </h1>
      </>
    );
}
 
export default ProductList;