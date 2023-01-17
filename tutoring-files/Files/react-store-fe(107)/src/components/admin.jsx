import "./admin.css";
import { useState } from "react";

const Admin = () => {
  const [product, setProduct] = useState([]);
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProds, setAllProds] = useState([]);

  const saveProduct = () => {
    console.log("A new product is here!", product);

    let copy = [...allProds];
    copy.push(product);
    setAllProds(copy);
  };

  const saveCoupon = () => {
    console.log("A message!", coupon);

    //send the coupon to the server

    //display the coupon on the screen
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  };

  const codeChange = (e) => {
    //console.log("Code Change", e.target.value);

    let copy = { ...coupon }; //create a copy
    copy.code = e.target.value; // modify the copy
    setCoupon(copy); //set the copy as the new value
  };

  const discountChange = (e) => {
    //console.log("Code Change", e.target.value);

    let copy = { ...coupon }; //create a copy
    copy.discount = parseFloat(e.target.value); // modify the copy
    setCoupon(copy); //set the copy as the new value
  };

  const prodChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    let copy = { ...product };
    copy[name] = value;
    setProduct(copy);
  };

  return (
    <div className="admin-page">
      <h1>Store Management</h1>
      <main className="admin-container">
        <section className="prods">
          <h1>Register new products</h1>
          <div className="form">
            <div>
              <label className="form-label">Title</label>
              <input
                onChange={prodChange}
                type="text"
                name="title"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Image</label>
              <input
                onChange={prodChange}
                type="image"
                name="image"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Catagory</label>
              <input
                onChange={prodChange}
                type="text"
                name="catagory"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Price</label>
              <input
                onChange={prodChange}
                type="number"
                name="price"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Description</label>
              <input
                onChange={prodChange}
                type="textarea"
                name="description"
                className="form-control"
              />
            </div>
          </div>
          <button onClick={saveProduct} className="btn btn-outline-dark">
            Register Product
          </button>
        </section>

        <aside className="coupons">
          <h1> Discount coupon code</h1>
          <div className="form">
            <div>
              <label className="form-label">Code</label>
              <input
                onChange={codeChange}
                type="text"
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label">Discount</label>
              <input
                onChange={discountChange}
                type="number"
                className="form-control"
              />
            </div>
          </div>

          <button onClick={saveCoupon} className="btn btn-outline-dark">
            Register
          </button>
          <h4>Valid Coupons</h4>
          <ul className="valid-coupons">
            {allCoupons.map((c, index) => (
              <li key={index}>
                {c.code}- {c.discount}%{" "}
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
};

//console.log prods
//add admin page to nav
export default Admin;
