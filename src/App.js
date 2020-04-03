//https://styled-components.com/docs/basics#getting-started

import React from "react";
import styled, { ThemeProvider } from 'styled-components';

const Button = styled.button`
  background : ${props => props.primary ? 'palevioletred' : '#ffffff'};
  padding: 1rem 1.2rem;
  font-size: 1rem;
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  margin: 0.5rem;
  border-radius: 4px;
  border: 1px solid palevioletred;
  ${props => console.log(props)}
`;

const Title = styled.h1`
  color: green;
  font-size: 1rem;
  font-weight: normal;
`;

const Wrapper = styled.section`
  background: papayawhip;

  & > h1 {
    font-size: 2rem;
  }
`;

//extending styles
const ExtendedTitle = styled(Title)`
  color: red;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

//custom React component
const SomeWrapper = ({message}) => {
  return (
    <Wrapper>{message}</Wrapper>
  );
}

//Themed styled component
const ThemedButton = styled.button`
  margin: 1rem;
  padding: 0.8rem 1.2rem;
  font-size: 1.1rem;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.typography.secondary};
  color: ${props => props.theme.typography.primary};
  background: transparent;
  ${props => console.log(props)}
`;

//App
export default function App() {
  const theme = {
    typography: {
      primary: 'green',
      secondary: '#ff00ff'
    }
  }

  return (
    <div className="App">
      <h1>Styled Components Example</h1>

      <Button>I am a Button</Button>
      <Button primary>
        I am primary button
      </Button>
      <Wrapper>
        <Title>This is a title</Title>
      </Wrapper>
      <ExtendedTitle>I am a Extended Title</ExtendedTitle>
      <SomeWrapper message='Hello my dear' />

      <ThemeProvider theme={theme}>
        <ThemedButton>Themed Button</ThemedButton>
      </ThemeProvider>
    </div>
  );
}
