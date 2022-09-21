import React from 'react'
import ClientFooter from './Footer';
import ClientHeader from './Header';

type ClientLayoutProps = {
    children: JSX.Element;
};

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <>
    <ClientHeader />
    <main className='mt-[67px]'>{children}</main>
    <ClientFooter />
    </>
  )
}

export default ClientLayout