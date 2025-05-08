body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #0f0f0f;
  color: #ffffff;
}

header {
  text-align: center;
  padding: 2rem 1rem;
  background: #111111;
  border-bottom: 1px solid #222;
}

h1 {
  font-size: 2.5rem;
  margin: 0;
}

p {
  font-size: 1.2rem;
  color: #ccc;
}

main {
  padding: 2rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: #1c1c1c;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 10px #00000055;
}

.product-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 0.75rem;
}

.product-card h3 {
  margin: 0.5rem 0;
}

.product-card a {
  color: #4cc9f0;
  text-decoration: none;
  font-weight: bold;
}

footer {
  text-align: center;
  padding: 1rem;
  background: #111111;
  color: #666;
}
