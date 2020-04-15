import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from 'react-particles-js';

export const ParticlesHero: React.FC = () => (
  <ScrollAnimation animateIn="fadeInUp" animateOnce>
    <div className="particles-hero">
      <Particles
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 300,
              },
            },
            opacity: {
              value: 0.5,
              random: true,
            },
            size: {
              random: true,
            },
            line_linked: {
              distance: 125,
              color: '#ffffff',
            },
            move: {
              speed: 5,
              random: true,
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: true,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  </ScrollAnimation>
);
