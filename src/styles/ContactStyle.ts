import styled from "styled-components"

const CardContact = styled.form`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  backdrop-filter: blur(8px);
  text-align: center;
  padding: 30px;
  width: 70%;
  margin-top: 100px;

  @media (max-width: 920px) {
    width: 100%;
    padding: 20px;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const InputStyle = styled.input`
  border: none;
  outline: none;
  margin: 10px 0;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.mainColor};
  padding: 15px;
  border-radius: 20px;
  width: 100%;
  &::placeholder {
    color: ${props => props.theme.mainColor};
    opacity: 0.8;
  }
`

const TextArea = styled.textarea`
  border: none;
  outline: none;
  margin: 10px 0;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.mainColor};
  padding: 15px;
  border-radius: 20px;
  width: 70%;
  width: 100%;
  &::placeholder {
    color: ${props => props.theme.mainColor};
    opacity: 0.8;
  }
`

const ContactTitle = styled.p`
  font-size: 25px;
  font-weight: 799;
`

const ContactButton = styled.button`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.text};
  border: none;
  outline: none;
  padding: 15px;
  transition: all 0.3s ease;
  border-radius: 20px;
  border: 1px ${props => props.theme.text} solid;

  &:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.mainColor};
  }
`

export {
  CardContact,
  Center,
  InputStyle,
  TextArea,
  ContactTitle,
  ContactButton,
}
