
import React, { useState, useEffect } from 'react';

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching data from an API
    //fetch('http://localhost:3001/posts')
     fetch('https://studious-giggle-65w7jxxw5rw25jwx-3001.app.github.dev/posts')
      .then(response => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        setData(data);  // Set the data in state
        setLoading(false);  // Turn off the loading state
      })
      .catch(error => {
        setError(error);  // Set error if any occurs
        setLoading(false);  // Turn off the loading state
      });
  }, []); // Empty dependency array means the effect runs once when the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    // <div>
    //   <h2>Posts</h2>
    //   <ul>
    //     {data.slice(0, 10).map(post => (  // Limiting to the first 10 posts
    //       <li key={post.id}>
    //         <h3>{post.name}</h3>
    //         {/* <p>{post.body}</p> */}
    //       </li>
    //     ))}
    //   </ul>
    // </div>

<div>
      <h1>Product List</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>Rs.{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )


}

export default Products;



