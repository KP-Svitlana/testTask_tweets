import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header';
import { Container } from 'components/Container';

const Layout = () => {
  return (
    <>
      <Container>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
