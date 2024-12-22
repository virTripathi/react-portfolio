import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import LandingPageLoader from '../Components/Animations/LandingPageLoader';
import { RotatingDisc } from '../Components/Animations';
import { Link, useLocation } from 'react-router-dom';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/outline';

const GuestLayout = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark');
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation(); 
  const currentPath = location.pathname.split('/').pop();
  

  useEffect(() => {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const ctrl = document.getElementById('audioControl');

    if (ctrl && backgroundMusic) {
      ctrl.onclick = function () {
        const newState = !isPlaying;
        setIsPlaying(newState);
        const method = newState ? 'play' : 'pause';
        // backgroundMusic[method]();
        return false;
      };
    }
  }, [isPlaying]); 

  function toggleTheme(newTheme) {
    const html = document.documentElement;
    setTheme(newTheme);
    html.classList.remove('dark', 'light', 'mono');
    html.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  }

  useEffect(() => {
    
    const audioElement = document.getElementById("backgroundMusic");
  
    if (audioElement) {
      audioElement.play().catch((error) => {
        console.log("Autoplay was prevented. Waiting for user interaction...");
        
        // Add an event listener for the first user interaction (hover or move)
        const playAudioOnInteraction = () => {
          // audioElement.play();
          setIsPlaying(true);
          document.removeEventListener('click', playAudioOnInteraction);
        };
  
        document.addEventListener('click', playAudioOnInteraction, { once: true });
      });
    }
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') ?? 'dark';
    document.documentElement.classList.add(savedTheme);
    setTheme(savedTheme);

    const timer = setTimeout(() => {
      const loader = document.getElementById('loader');
      const main = document.getElementById('main');

      if (loader && main) {
        loader.classList.add('hidden');
        main.classList.add('animate-increase-opacity');
        main.classList.remove('hidden');
        main.classList.add('block');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <div className='font-sans transition-all dark:bg-stone-950 bg-stone-100 dark:text-stone-500 text-stone-200'>
      <div id="loader" className="animate-increase-opacity loading-container">
        <LandingPageLoader />
      </div>
      <main>
        <section id="main" className='grid grid-cols-20 grid-rows-20 h-screen gap-y-1 hidden'>
          <div className='row-span-1 col-span-20'></div>
          <div className='row-span-18 col-span-1 self-center justify-self-center'>
            <div className='rotate-270  flex gap-4'>
            <p 
              className={`hover:cursor-pointer hover:text-stone-300 ${theme === 'dark' ? 'text-stone-300' : 'text-stone-500'}`} 
              onClick={() => toggleTheme('dark')}
            >
              Dark
            </p>
            <p 
              className={`hover:cursor-pointer hover:text-stone-300 ${theme === 'light' ? 'text-stone-300' : 'text-stone-500'}`} 
              onClick={() => toggleTheme('light')}
            >
              Light
            </p>
            </div>
          </div>
          <div className='row-span-18 col-span-18 border-stone-500 border-2 dark:text-white text-black no-scroll relative z-0' >
            {/* <RotatingDisc /> */}
            
            <div className='bg-green-500 absolute right-0 -z-10 rounded-full' style={{ width: 'calc(2 * 100vh)', height: 'calc(2 * 100vh)', transform: 'translateX(50%)' }}>
            </div>
            <section className='p-2 h-fill-available' style={{ height: '-webkit-fill-available' }}>
              <div className='grid grid-cols-2 grid-rows-2 justify-center content-center h-inherit'>
                <div className='fixed'>
                    <h1 className='text-4xl tracking-wider'>Virat Tripathi</h1>
                    <p className='text-sm pt-1'>Design. Develop. Deploy.</p>
                  <div className='text-sm lg:text-xl tracking-wide pt-2'>
                    <nav>
                      <ul className='flex flex-col gap-4'>
                        <li className={`${currentPath==='' ? 'text-stone-300 dark:text-stone-500': ''}`}>
                          <Link  to="/">Home</Link>
                        </li>
                        <li className={`${currentPath==='work' ? 'text-stone-300 dark:text-stone-500': ''}`}>
                          <Link  to="/work">Work</Link>
                        </li>
                        <li className={`${currentPath==='projects' ? 'text-stone-300 dark:text-stone-500': ''}`}>
                          <Link  to="/projects">Projects</Link>
                        </li>
                        <li className={`${currentPath==='tech-stack' ? 'text-stone-300 dark:text-stone-500': ''}`}>
                          <Link to="/tech-stack">Tech Stack</Link>
                        </li>
                        <li className={`${currentPath==='contact' ? 'text-stone-300 dark:text-stone-500': ''}`}>
                          <Link  to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='col-span-1 row-span-1 '>

                </div>
                <div className='col-span-1 row-span-2 flex flex-col justify-end items-end'>
                  <div className='flex flex-col justify-between items-center h-full'>
                    <div className='h-1/2'></div>
                    <div className='h-1/2'>
                    <Outlet/>
                  </div>
                  </div>
                  
                </div>
                <div className='col-span-1 row-span-1'>
                </div>
              </div>
            </section>
          </div>
          <div className='row-span-18 col-span-1'>
          </div>
          <div className='row-span-1 col-span-1'>
          </div>
          <div className='row-span-1 col-span-18 flex justify-between lg:justify-center lg:gap-4 items-center dark:text-stone-500 text-stone-900'>
            <p className='' style={{fontSize:'12px'}}>
              &copy; Virat Tripathi
            </p>
            <div id="audioControl">
              {isPlaying ? (
                  <PauseIcon className='hover:cursor-pointer w-6' />
                ) : (
                  <PlayIcon className='hover:cursor-pointer w-6' />
                )}
            </div>
          </div>
          <div className='row-span-1 col-span-1'>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GuestLayout;
