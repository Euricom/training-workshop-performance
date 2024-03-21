import home from "/home.jpg";

// Tip: Optimize the image & use `srcset`
const Home = () => {
  return (
    <>
      <h1 className="text-2xl"> Performance</h1>
      <img alt="home image" src={home} />
    </>
  );
};

export default Home;
