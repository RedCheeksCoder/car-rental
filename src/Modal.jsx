import { useState } from "react";
import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

const StyledModal = Modal.styled`
margin-top: 10rem;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
 font-family: "Poppins";
  `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 25%;
  font-family: "Poppins";
`;

const Button = styled.div`
  background-color: #ff7231;
  box-shadow: 0 10px 15px 0 rgba(255, 83, 48, 0.35);
  border-radius: 7px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 1rem;
  font-weight: bold;
  padding: 1rem;
  text-decoration: none;
  width: 25rem;
  text-align: center;
  align-self: self-end;
`;

function FancyModalButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <ButtonContainer>
      <Button onClick={toggleModal}>Search</Button>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}>
        <span>{children}</span>
      </StyledModal>
    </ButtonContainer>
  );
}
/* <button onClick={toggleModal}>Close me</button> */

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export default FancyModalButton;
