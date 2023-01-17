import { useEffect, useState } from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import ToDo from "./todo";

const Catalog = () => {
  const [products, setProducts] = useState([]);

  //load data function
  const loadData = async () => {
    let service = new DataService();
    let data = await service.getCatalog();
    setProducts(data);
  };

  //when the component loads
  useEffect(() => {
    loadData();
  }, []);

  /**
   * create state variable (products)
   * set data (from loadData) to the state variable
   */
  return (
    <div className="catalog">
      <h3>Our Amazing Catalog</h3>
      <h5>There are {products.length} usurious products</h5>

      {products.map((p) => (
        <Product key={p._id} data={p} />
      ))}
      <ToDo></ToDo>
    </div>
  );
};

export default Catalog;
