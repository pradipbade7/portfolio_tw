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
          number: { 
            value: window.innerWidth < 640 ? 40 : 80 
          }, 
          shape: {
            type: ["dot", "circle" ], // Mix of shapes to represent stars and galaxy edges
          },
          color: {
            value: ["#FFFFFF", "#FFD700", "#8A2BE2", "#FF4500", "#00CED1"],
          },
          size: {
            value: { min: 1, max: 3 }, // Smaller size range for a starry effect
          },
          opacity: { 
            value: { min: 0.1, max: 0.7 }, // Random opacity for a more natural look
          },
          move: {
            enable: true,
            speed: 0.5, // Slower speed for a calm effect
            outModes: {
              default: "bounce", // All edges bounce
            },
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
            opacity: 0.3,
            width: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: {
              distance: 200,
              links: { opacity: 0.5 }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              quantity: 4
            },
            remove: {
              quantity: 2
            },
            attract: {
              distance: 200,
              duration: 0.4,
              factor: 5
            },
            connect: {
              distance: 80,
              radius: 60,
              links: { opacity: 0.5 }
            },
            trail: {
              delay: 0.005,
              quantity: 5,
              particles: {
                size: {
                  value: 5
                },
                color: {
                  value: "#ff0000"
                }
              }
            }
          }
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
