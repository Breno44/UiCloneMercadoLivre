import React from "react";

import tshirtImage from "../../assets/tshirt.png";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

export function Product() {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-shirt" />
          </Gallery>

          <Info />
        </Column>
        <Column>
          {/* <ProductAction />
          <SellerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4></h4>

    <div>
      <span>
        <p className="title">Compra Garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem Garantia</p>
      </span>
    </div>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium,
      esse eius itaque corrupti libero reiciendis? Dolorem perspiciatis deserunt
      corporis praesentium nobis veniam, debitis soluta quae animi fugit
      doloribus, sint ducimus?
      <br />
      <br />
      Itens inclusos - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
      maiores unde consequatur perspiciatis ratione necessitatibus nam quis
      ducimus? Adipisci sapiente aspernatur tempora omnis, ab molestiae
      exercitationem consequuntur illo pariatur. Iusto beatae sit tempora
      perferendis repellat. Optio dolorum officia similique veritatis ipsa
      aliquam consequatur, fuga vel eos fugit recusandae error tempora. Lorem
      ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis saepe hic
      asperiores dolore repudiandae exercitationem distinctio itaque tempore
      nostrum a! Aut optio non rem quia, repudiandae quibusdam amet repellat ab.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo consectetur
      repudiandae omnis fugit ducimus veniam nisi consequatur quis doloribus
      vel, aut similique unde eos vitae est officiis odio porro libero delectus?
      Molestiae totam sequi vero delectus molestias esse! Incidunt repellendus
      natus sit mollitia dignissimos magnam a illum cumque quaerat illo!
    </p>
  </Description>
);
