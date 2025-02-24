import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function AnimationHero() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 100 }, // Increased number of particles for a denser look
          shape: {
            type: ["circle", "" ], // Mix of shapes to represent stars and galaxy edges
          },
          color: {
            value: ["#FFFFFF", "#FFD700", "#8A2BE2", "#FF4500", "#00CED1"],
          },
          size: {
            value: { min: 1, max: 5 }, // Smaller size range for a starry effect
          },
          opacity: { 
            value: { min: 0.3, max: 1 }, // Random opacity for a more natural look
          },
          move: {
            enable: true,
            speed: 0.5, // Slower speed for a calm effect
            outModes: { default: "destroy" },
            attract: {
              enable: true,
              rotate: {
                x: 3000,
                y: 3000,
              },
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            push: {
              particles_nb: 4, // Number of particles to add on click
            },
            repulse: {
              distance: 100,
              duration: 2,
            },
          },
        },
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -10,
      }}
    />
  );
}
