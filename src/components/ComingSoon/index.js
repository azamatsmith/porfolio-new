import React, { Suspense } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Canvas } from 'react-three-fiber';
import { Html } from 'drei';

import Asteroids from './components/Asteroids';
import Jumbo from './components/Jumbo';
import LoadingText, { gradientAnimation } from './components/LoadingText';

const StyledCanvas = styled(Canvas)`
  background-color: black;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;
`;

const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 3px;
  padding: 20px;
  transition: opacity 150ms ease-out;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;

  :hover {
    opacity: 0.4;
  }
`;

const TextWrapper = styled.span`
  font-weight: bold;

  background: linear-gradient(243deg, #c945fb, #45fbe4);
  background-size: 400% 400%;

  animation: ${gradientAnimation} 4s ease infinite;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

function ComingSoon() {
  const [open, setOpen] = React.useState(true);

  if (!open) {
    return null;
  }

  return (
    <Wrapper>
      <StyledCanvas
        camera={{ position: [0, 0, 35] }}
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Suspense
          fallback={
            <Html>
              <LoadingText />
            </Html>
          }
        >
          <Jumbo />
          <Asteroids />
        </Suspense>
      </StyledCanvas>
      <Button onClick={() => setOpen(false)}>
        <TextWrapper>CLOSE</TextWrapper>
      </Button>
    </Wrapper>
  );
}

ComingSoon.propTypes = {};

ComingSoon.defaultProps = {};

export default ComingSoon;
