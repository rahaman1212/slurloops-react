import "./Products.css";
function Products() {
  const Product = [
    {
      id: "1",
      ProductImage: ["./assets/images/classic-loop (2).jpg"],
      ProductName: "Classic Loop",
      Description: "The original crunchy, golden biscuit that started. it all",
    },
    {
      id: "2",
      ProductImage: ["./assets/images/choco-loop1.jpg"],
      ProductName: "Choco Loop",
      Description: "Rich cocoa flavor with a smile in every bite.",
    },
    {
      id: "3",
      ProductImage: ["./assets/images/nuttty-loop2.jpg"],
      ProductName: "Nutty Loop",
      Description:
        "Crunchy biscuit blended with peanuts and a hint of caramel.",
    },
  ];
  return (
    <>
      <section id="products" className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {Product.map((project) => (
            <div className="product-card float" key={project.id}>
              {project.ProductImage.map((image, index) => (
                <img key={index} src={image} alt={project.ProductName} />
              ))}
              <h3>{project.ProductName}</h3>
              <p>{project.Description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default Products;
