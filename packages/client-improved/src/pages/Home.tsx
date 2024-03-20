const Home = () => {
  return (
    <>
      <h1 className="text-2xl"> Performance</h1>
      <img
        className="w-max"
        srcSet="
            /home-4x.webp 2000w,
            /home-3x.webp 1000w,
            /home-2x.webp 800w,
            /home-1x.webp 400w"
        alt="home image"
        src="/home-original-optimized.webp"
      />
    </>
  );
};

export default Home;
