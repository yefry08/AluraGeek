window.onload = function() {
    loadProducts();
  };
  
  function saveProduct(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[placeholder="nombre..."]').value;
    const price = document.querySelector('input[placeholder="precio..."]').value;
    const image = document.querySelector('input[placeholder="imagen..."]').value;
  
    if (name && price && image) {
      let products = JSON.parse(localStorage.getItem('products')) || [];
  
      // Validate duplicate names
      if (products.some(product => product.name === name)) {
        alert('El producto ya existe.');
        return;
      }
  
      const newProduct = {
        id: Date.now(), // Unique ID
        name: name,
        price: price,
        image: image
      };
  
      products.push(newProduct);
      localStorage.setItem('products', JSON.stringify(products));
  
      document.querySelector('form').reset();
      loadProducts();
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
  
  function loadProducts() {
    const productList = document.querySelector('.product-list');
    productList
  }