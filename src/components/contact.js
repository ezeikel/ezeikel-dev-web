import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #789EB4;
  padding: 32px;
`;

const CopyWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const FormWrapper = styled.section`
  display: flex;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  padding: 32px;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  label, input, textarea, button {
    font-size: 16px;
  }
  label {
    display: flex;
    color: var(--color-black);
    margin-bottom: 8px;
  }
  input, textarea {
    border-radius: var(--border-radius);
    border: 1px solid #EFEFEF;
    margin-bottom: 16px;
  }
  textarea {
    margin-bottom: 32px;
  }
  button {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 16px 104px;
    border-radius: var(--border-radius);
    box-shadow: 0 3px 6px rgba(0,227,194, 0.16);
    font-weight: 500;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: var(--color-white);
  margin: 0 0 32px 0;
`;

const Copy = styled.p`
  font-size: 20px;
  font-weight: 300;
  color: var(--color-white);
  font-weight: 300;
  line-height: 1.5;
  margin: 0 0 64px 0;
`;

const Background = () => (
  <Wrapper>
    <CopyWrapper>
      <Title>Let's Talk!</Title>
      <Copy>If you think I could help solve a problem or even if you just want to chat, feel free to shoot me a message.</Copy>
    </CopyWrapper>
    <FormWrapper>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Biggie Smalls" />
        <label htmlFor="email">Name</label>
        <input id="email" type="email" placeholder="bsmalls@badboy.com" />
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="It was all a dream, I used to read Word Up! magazine" />
        <button type="submit">Send</button>
      </form>
    </FormWrapper>
  </Wrapper>
);

export default Background;