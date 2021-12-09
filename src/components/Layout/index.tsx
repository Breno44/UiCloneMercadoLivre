import React from "react";
import { Container, Wrapper } from "./styles";
import { Product } from "../Product";

export function Layout() {
  return (
    <Container>
      {/* Header */}
      <Wrapper>
        <Product />
      </Wrapper>
      {/* footer */}
    </Container>
  );
}
