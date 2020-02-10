import React from "react";
import styled from "styled-components";
import InstagramCard from "./instagramCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, var(--color-secondary), var(--color-senary));
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;

const Primary = styled.section`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  height: 100%;
  padding: var(--header-height) var(--spacing-large) var(--spacing-large)
    var(--spacing-large);
  h2 {
    font-size: 36px;
    color: var(--color-primary);
    font-weight: 300;
    margin: 0 0 var(--spacing-small) 0;
    text-align: center;
    letter-spacing: 1px;
  }
  h1 {
    font-size: 48px;
    line-height: 1;
    color: var(--color-white);
    margin: 0 0 var(--spacing-large) 0;
    text-align: center;
    font-weight: 600;
    letter-spacing: 1px;
    span {
      color: var(--color-primary);
    }
  }
  p {
    margin: 0 auto var(--spacing-huge) auto;
    font-size: 20px;
    line-height: var(--line-height);
    color: var(--color-white);
    font-weight: 300;
    text-align: center;
  }
  @media (min-width: 768px) {
    grid-column: 1 / 7;
    display: grid;
    grid-template-rows: var(--header-height) auto auto auto 1fr auto;
    grid-row-gap: 24px;
    margin-bottom: 0;
    padding-top: var(--spacing-large);
    h2 {
      grid-row: 2 / span 1;
      align-self: end;
      font-size: 48px;
      line-height: 60px;
      text-align: left;
      margin: 0;
    }
    h1 {
      grid-row: 3 / span 1;
      font-size: 72px;
      margin: 0;
      text-align: left;
      font-weight: 600;
    }
    p {
      grid-row: 4 / span 1;
      font-size: 30px;
      line-height: 1.5;
      text-align: left;
      margin: 0;
    }
  }
`;

const Secondary = styled.section`
  background-color: rgb(255, 89, 94);
  padding: var(--spacing-large);
  @media (min-width: 768px) {
    grid-column: 9 / -1;
    display: grid;
    grid-template-rows: var(--header-height) repeat(4, auto);
  }
`;

const StyledButton = styled.button`
  background-color: var(--color-quaternary);
  color: var(--color-white);
  border: 3px solid var(--color-quaternary);
  border-radius: var(--border-radius);
  padding: var(--spacing-medium);
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 3px 6px rgba(255, 89, 94, 0.16);
  @media (min-width: 768px) {
    font-size: 18px;
    width: auto;
    padding: var(--spacing-medium) var(--spacing-large);
  }
`;

const SecondaryButton = styled.button`
  color: var(--color-white);
  border: 3px solid var(--color-white);
  background-color: transparent;
  border-radius: var(--border-radius);
  padding: var(--spacing-medium);
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 18px;
    width: auto;
    padding: var(--spacing-medium) 48px;
  }
`;

const Buttons = styled.span`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;
  grid-gap: var(--spacing-medium) 0;
  @media (min-width: 768px) {
    grid-row: 5 / span 1;
    grid-template-columns: repeat(2, minmax(auto, 250px));
    grid-template-rows: 1fr;
    grid-gap: 0 var(--spacing-medium);
    align-items: start;
  }
`;

const StyledInstagramCard = styled(InstagramCard)`
  @media (min-width: 768px) {
    transform: translateX(-100%);
    grid-row: 2 / 3;
    width: 320px;
    margin-left: 144px;
  }
  @media (min-width: 1024px) {
    width: 400px;
    margin-left: 184px;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Primary>
        <h2>Freelance</h2>
        <h1>
          Front End Developer<span>.</span>
        </h1>
        <p>
          I love solving problems with JavaScript and building beautiful UIs.
        </p>
        <Buttons>
          <StyledButton>Check out my work</StyledButton>
          <SecondaryButton>Hire me</SecondaryButton>
        </Buttons>
      </Primary>
      <Secondary>
        <StyledInstagramCard />
      </Secondary>
    </Wrapper>
  );
};

export default Hero;
