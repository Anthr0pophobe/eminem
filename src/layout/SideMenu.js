import React from 'react';
import Link from 'next/Link';

 const SideMenu = () => {
  return (
  <div className='col-span-1 rounded-tr-md h-full flex-col border-color-gray-900 border-b-2 border-t-px pl-4 row-start-2 col-start-1'>
      <ul className='col-span-1 rounded-tr-md h-100 flex-1 flex-col'>
          <Link href='/'>
              <a className='flex-1'>
                  <li className='h-16 mt-4 '>Accueil</li>
              </a>
          </Link>
          <Link href='/'>
              <a className='flex-1'>
                  <li className='h-16 mt-4'>Médias</li>
              </a>
          </Link>
          <Link href='/'>
              <a className='flex-1'>
                  <li className='h-16 mt-4'>Discographie</li>
              </a>
          </Link>
          <Link href='/'>
              <a className='flex-1'>
                  <li className='h-16 mt-4'>Actualités</li>
              </a>
          </Link>
          <Link href='/'>
              <a className='flex-1'>
                  <li className='h-16 mt-4'>Contact</li>
              </a>
          </Link>
      </ul>
  </div>
  );
}

export default SideMenu;
