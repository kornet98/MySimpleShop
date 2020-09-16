import React, { useEffect, useRef, useState } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

// Components
import { Header, SideBar, Modal } from './components';
import { Home, Cart } from './pages';

// Styles
import { GlobalStyles } from "./components/GlobalStyles.js";




const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 3;
  top: 0;
  left: 0;
  transition: all 0.8s ease 0s;
  cursor: pointer;
  visibility: visible;
  opacity: 1;
`
const ContentWrapper = styled.div`
  margin: 20px;
  width: 100%;
  height: 100%;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  height: 100%;
`

function App() {

  const [visibility, setVisibility] = useState(false);

  const modalRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, []);

  const handleOutsideClick = (event) => {
    const path = event.path || (event.composedPath && event.composedPath());
    if (!path.includes(modalRef.current)) {
      setVisibility(false);
    }
  }

  const togleVisibility = () => {
    setVisibility(!visibility)
  }

  return (
    <div >
      <GlobalStyles />
      <Header openModal={togleVisibility} />
      {visibility &&
        <Overlay >
          <div ref={modalRef} >
            <Modal closeModal={togleVisibility} />
          </div>
        </Overlay>
      }
      <Wrapper>
        <SideBar />
        <ContentWrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </ContentWrapper>
      </Wrapper>
    </div>
  );
}

export default App;