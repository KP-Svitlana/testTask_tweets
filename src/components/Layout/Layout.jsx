import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Container } from "../Container";

const Layout = () => {
  console.log("is is layout");
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
