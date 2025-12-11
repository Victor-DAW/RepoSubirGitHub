const coches = [
  {
    marca: "Ferrari",
    modelo: "488 GTB",
    precio: "$250,000",
    imagen: "https://images.unsplash.com/photo-1606813908893-655b7b9e00b5?auto=format&fit=crop&w=800&q=80"
  },
  {
    marca: "Lamborghini",
    modelo: "Aventador",
    precio: "$400,000",
    imagen: "https://images.unsplash.com/photo-1617352042412-6fa6be1d4c4d?auto=format&fit=crop&w=800&q=80"
  },
  {
    marca: "Porsche",
    modelo: "911 Turbo S",
    precio: "$200,000",
    imagen: "https://images.unsplash.com/photo-1629516145405-cf58cc1ed7dc?auto=format&fit=crop&w=800&q=80"
  }
];

function mostrarCoches() {
  const container = document.getElementById("coches");
  container.innerHTML = ""; // Limpia antes de insertar

  coches.forEach(coche => {
    const card = document.createElement("div");
    card.className = "coche-card";
    card.innerHTML = `
      <img src="${coche.imagen}" alt="${coche.marca} ${coche.modelo}">
      <div class="info">
        <h3>${coche.marca} ${coche.modelo}</h3>
        <p>Precio: ${coche.precio}</p>
      </div>
    `;
    container.appendChild(card);
  });
}
