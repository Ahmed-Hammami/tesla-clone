import React from 'react';
import styled from 'styled-components';
import Section from './Section';
function Home() {
  return (
    <div>
    <Container>
    <Section
    title="Model S"
    description="Order Online for Touchless Delivery"
    backgroundimg="model-s.jpg"
leftBtntext="Custom Order"
rightBtntext="Existing inventory"
    />
    
    <Section 
     title="Model Y"
     description="Order Online for Touchless Delivery"
     backgroundimg="model-y.jpg"
 leftBtntext="Custom Order"
 rightBtntext="Existing inventory"
    
    />
    <Section
    title="Model 3"
    description="Order Online for Touchless Delivery"
    backgroundimg="model-3.jpg"
leftBtntext="Custom Order"
rightBtntext="Existing inventory"
    
    
    />
    <Section
     title="Model x"
     description="Order Online for Touchless Delivery"
     backgroundimg="model-x.jpg"
 leftBtntext="Custom Order"
 rightBtntext="Existing inventory"
    
    
    />
    <Section
     title="Lowest Cost Solar Panels in America"
     description="Money-back guarantee"
     backgroundimg="solar-panel.jpg"
 leftBtntext="Order now"
 rightBtntext="Learn more"
    
    
    />
    <Section
     title="Solar for New Roofs"
     description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
     backgroundimg="solar-roof.jpg"
 leftBtntext="Order now"
 rightBtntext="Learn more"
    
    />
     <Section
     title="Accessories"
     description=""
     backgroundimg="accessories.jpg"
 leftBtntext="Shop now"
 
    
    />


    </Container>
      
    </div>
  );
}

export default Home;
const Container=styled.div `
height:100vh;
`
