import React from "react";
import { Container, Wrapper } from "./styles";
import { Product } from "../Product";
import Header from "../Header";
import Footer from "../Footer";

export function Layout() {
  return (
    <Container>
      <Header />
      <Wrapper>
        <Product />
      </Wrapper>
      <Footer />
    </Container>
  );
}
