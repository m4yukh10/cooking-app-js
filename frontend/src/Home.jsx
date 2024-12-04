import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Home() {
  const [ingredients, setIngredients] = useState([]);
  const [procedure, setProcedure] = useState([]);
  const fetchIngredients = async () => {
    try {
      const response = await axios.get("/api/processed");
      console.log("Response received:", response.data);
      setIngredients(response.data);
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  const fetchProcedures = async() => {
    try {
      const response = await axios.get("/api/procedure");
      setProcedure(response.data);
    } catch (error){
      console.error("Axios error:", error);
    }
  }

  useEffect(() => {
    fetchIngredients();
  }, []);

  useEffect(() => {
    fetchProcedures();
  }, []);
  


  return (
    <div>
      <h1>Ingredients</h1>
      <p>Everything you would need to cook this all by yourself! </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <div style={{width: '45%', padding: '20px', backgroundColor: 'lightblue',textAlign: 'center'}}>
        {ingredients.map((ingredient, index) =>(
          <ul key = {index}>
            <li>{ingredient}</li>
          </ul>
        ))}
        </div>
        <div style={{ width: '45%', padding: '20px', backgroundColor: 'lightblue', textAlign: 'center' }}>
          <h1>Procedure: </h1>
          <p>Know how to cook!</p>

          <div>
            {procedure.map((prod, index) => (
              <ul key = {index}>
                <li>{procedure}</li>
              </ul>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
  }
  
  export default Home;
  