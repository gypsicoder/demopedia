import React from 'react';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <h1 className='text-5xl mb-[20px]'>Our works</h1>
      {children}
    </div>
  );
}

export default Layout;
