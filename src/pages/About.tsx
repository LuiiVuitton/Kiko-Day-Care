import React from "react";

interface AboutProps {
  AboutImageSrcPath: string;
}

const About: React.FC<AboutProps> = ({ AboutImageSrcPath }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#f4f4f9",
        padding: "50px 0",
        boxSizing: "border-box",
      }}
    >
      {/* Parallax Background Layer */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${AboutImageSrcPath})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: "0.1",
          transform: "translateX(-50%)",
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          width: "100%",
          boxSizing: "border-box",
          color: "#333",
          textAlign: "center",
        }}
      >
        {/* Section Header */}
        <h1
          style={{
            fontSize: "3.5em",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#222",
            textTransform: "uppercase",
            letterSpacing: "4px",
          }}
        >
          Who We Are
        </h1>
        <p
          style={{
            fontSize: "1.5em",
            lineHeight: "1.8",
            maxWidth: "900px",
            margin: "0 auto 50px",
            color: "#555",
          }}
        >
          Embarking on a journey of innovation and excellence, we are a
          collective of visionaries committed to redefining the boundaries of
          possibility.
        </p>

        {/* Content Section with Layers */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            maxWidth: "1200px",
            flexWrap: "wrap",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Layered Text Section */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              boxSizing: "border-box",
              minWidth: "300px",
              textAlign: "left",
              transform: "translateY(-20px) rotate(-1deg)",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              zIndex: 3,
              borderRadius: "8px",
            }}
          >
            <h2
              style={{
                fontSize: "2em",
                marginBottom: "15px",
                color: "#222",
              }}
            >
              Our Vision
            </h2>
            <p
              style={{
                fontSize: "1.2em",
                lineHeight: "1.8",
                marginBottom: "20px",
                color: "#555",
              }}
            >
              At the core of our company lies an unwavering belief in the power
              of innovation. We strive to not only meet the challenges of today
              but to anticipate the needs of tomorrow, crafting solutions that
              are both visionary and practical.
            </p>
          </div>

          {/* Image Section with Overlays */}
          <div
            style={{
              flex: 1,
              padding: "20px",
              boxSizing: "border-box",
              minWidth: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                zIndex: 2,
              }}
            >
              <img
                src={AboutImageSrcPath}
                alt="Our Story"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              {/* Dynamic Overlay Effect */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.1)",
                  mixBlendMode: "multiply",
                  transform: "rotate(2deg)",
                  zIndex: -1,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Additional Text Section */}
        <div
          style={{
            marginTop: "50px",
            width: "100%",
            maxWidth: "1000px",
            padding: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            textAlign: "left",
            transform: "rotate(1deg)",
          }}
        >
          <h2
            style={{
              fontSize: "2em",
              marginBottom: "15px",
              color: "#222",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "1.2em",
              lineHeight: "1.8",
              color: "#555",
            }}
          >
            We are driven by a relentless pursuit of excellence. Our mission is
            to harness the power of technology and creativity to deliver
            solutions that inspire and empower. We are dedicated to making a
            positive impact, not only in our industry but in the world at large.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
