import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.


export default function LandingPage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
//       await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

    const particlesLoaded = (container) => {
      console.log(container);
    };

    const options = useMemo(
      () => ({
        background: {
          color: {
            value: "#f1f1f1",
          },
        },
        fpsLimit: 144,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#9f9f9f",
          },
          links: {
            color: "#222222",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }),
      [],
    );

  if (init) {
    return (
    <div>
      <Particles
        id="tsparticles"
        className="fixed -z-10"
        particlesLoaded={particlesLoaded}
        options={options}
      />
      <div className='min-w-screen min-h-screen flex justify-center content-center items-center flex-col'>
        <div className='bg-backgroundColor border-2 border-[#9f9f9f] rounded-3xl px-5
        flex gap-10 max-md:flex-col max-md:flex-col-reverse'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-5xl text-right max-md:text-center mb-5'>Hayden Brewer</h1>
            <div className='flex flex-col items-end max-md:items-center'>
              <Link className='text-xl w-fit' to='/about'>About Me</Link>
              <Link className='text-xl w-fit' to='/works'>My Work</Link>
              <a className='text-xl w-fit' href='/resume.pdf'>Resume</a>
            </div>
          </div>
          <div className='center'>
            <img className='w-96 rounded-3xl' src="./cover.png"/>
            <a className='text-sm text-center block m-5 text-slate-200 max-md:hidden' href="mailto:hayden.brewer@maine.edu">hayden.brewer@maine.edu</a>
          </div>
        </div>
        <a className='text-sm w-fit text-center block m-10 text-slate-200 md:hidden' href="mailto:hayden.brewer@maine.edu">hayden.brewer@maine.edu</a>
      </div>
    </div>
    );
  }

}
