const express = require("express");
const { uuid } = require("uuidv4");

const app = express();
app.use(express.json());

const products = [];

app.get("/lista-produto", (request, response) => {
  const { produto, qnt, valor } = request.query;
  product = { produto, qnt, valor };

 return response.json(products);
 
});

app.post("/add-produto", (request, response) => {
  const { produto, qnt, valor } = request.body;
  product = { id: uuid(), produto, qnt, valor };

  products.push(product);
  return response.json(product);
});

app.put("/edit-produto/:id", (request, response) => {
  const { id } = request.params;
  const { produto, qnt, valor } = request.body;

  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex < 0) {
    return response.status(404).json({ error: "Product not found" });
  }
  const product = {
    id,
    produto,
    qnt,
    valor,
  };
  products[productIndex] = product;
  return response.json(product);
});

app.delete("/delete-produto/:id", (request, response) => {
    const { id } = request.params;
    const { produto, qnt, valor } = request.body;
  
    const productIndex = products.findIndex((product) => product.id === id);
    if (productIndex < 0) {
      return response.status(404).json({ error: "Product not found" });
    }
    products.splice(productIndex, 1)
  
    return response.status(204).send(product);
  });


app.listen(3333, () => {
  console.log("Back-end funcionando");
});
