// css
import './App.css';

// react
import { useState, useEffect } from 'react';

// 4 custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {

  // 4 custom hook
  const {data: items, httpConfig, loading, error} = useFetch(url);



  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //aula 1
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();

  //     setProducts(data);
  //   };

  //   fetchData();
  // }, []);

  // 2 add produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // carregamento dinamico
    // const addedProduct = await res.json();

    // setProducts((prevProducts)=> [...prevProducts, addedProduct])

    //5 refatorando post
    httpConfig(product,"POST")
    setName("");
    setPrice("");
  }
  // desafio 6
  const handleRemove = (id)=>{
    httpConfig(id,"DELETE")
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$ {product.price}
            <button onClick={()=> handleRemove(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input 
            type="text" 
            value={name} 
            name="name"
            onChange={(e)=> setName(e.target.value)}
            required
            />
          </label>
          <label>
            Preço:
            <input 
            type="number" 
            value={price} 
            name="price"
            onChange={(e)=> setPrice(e.target.value)}
            required
            />
          </label>
          {loading && <input type="submit" disabled value="aguarde" />}
          {!loading && <input type="submit" value="Adicionar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
