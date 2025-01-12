import "./App.css";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Womens",
    },
    {
      id: 2,
      title: "Mens",
    },
    {
      id: 3,
      title: "Hoodies",
    },
    {
      id: 4,
      title: "Hats",
    },
    {
      id: 5,
      title: "Shoes",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <>
          <div className="category-container">
            <div className="background-image" />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default App;
