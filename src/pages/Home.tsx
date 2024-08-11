import React, { useState, useEffect } from "react";

interface HomeProps {
  SlideImage1SrcPath: string;
  SlideImage2SrcPath: string;
  SlideImage3SrcPath: string;
}

const Home: React.FC<HomeProps> = ({
  SlideImage1SrcPath,
  SlideImage2SrcPath,
  SlideImage3SrcPath,
}) => {
  const images = [SlideImage1SrcPath, SlideImage2SrcPath, SlideImage3SrcPath];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const backgroundStyle = {
    height: "400px",
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    transition: "background-image 1s ease-in-out", // Smooth transition
  };

  return <div id="Home" style={backgroundStyle}></div>;
};

export default Home;
