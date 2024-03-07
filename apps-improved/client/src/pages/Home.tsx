import React from 'react'

const Home = () => {
    return (
        <>
          <h1 className="text-2xl"> Performance</h1>
          <img   srcSet="
            /home-4x.webp 6240w,
            /home-3x.webp 4680w,
            /home-2x.webp 3120w,
            /home-1x.webp 1560w"
          alt="home image" src="/home-original-optimized.webp" />
        </>
      );
}

export default Home