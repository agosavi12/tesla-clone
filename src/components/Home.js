import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftbutton="Custome Order"
        rightbutton="Existing Inventory"
        background="model-s.jpg"
      />

      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftbutton="Custome Order"
        rightbutton="Existing Inventory"
        background="model-y.jpg"
      />

      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftbutton="Custome Order"
        rightbutton="Existing Inventory"
        background="model-3.jpg"
      />

      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftbutton="Custome Order"
        rightbutton="Existing Inventory"
        background="model-x.jpg"
      />

      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        leftbutton="Order Now"
        rightbutton="Learn More"
        background="solar-panel.jpg"
      />

      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftbutton="Order Now"
        rightbutton="Learn More"
        background="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        leftbutton="Shop Now"
        background="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
