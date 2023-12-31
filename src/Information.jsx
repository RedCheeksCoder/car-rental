import styled from "styled-components";

const StyledInformation = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 5rem;
  margin-top: 5rem;
  b {
    color: #ff7231;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 0 2rem;
    label {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    input {
      background-color: #f2f2f2;
      border: none;
      font-size: 1rem;
      outline: none;
      padding: 19px 30px;
      margin-bottom: 1rem;
    }
    textarea {
      height: 18rem;
      margin-bottom: 2.5rem;
      background-color: #f2f2f2;
      border: none;
      font-size: 1rem;
      outline: none;
      padding: 19px 30px;
    }
  }
`;

const Details = styled.div`
  font-size: 1.5rem;
  margin: 0 2rem;
  width: 70%;

  p {
    color: #818080ae;
    font-size: 1.2rem;
  }
  h4,
  h1 {
    margin: 0.3rem;
  }
`;
function Information() {
  return (
    <StyledInformation>
      <Details>
        <h1>
          <b>Contact us</b> for more details
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eos aut
          quis. Dolor, hic sint.
        </p>
        <h4>(02) 882-0925</h4>
        <h4>rentcar@org.co</h4>
      </Details>
      <form>
        <label>
          Name
          <b>*</b>
        </label>
        <input type="text" placeholder="Juan Dela Cruz" />
        <label>
          Email
          <b>*</b>
        </label>
        <input type="text" placeholder="juandelacruz@gmail.com" />
        <label>
          Tell us about it
          <b>*</b>
        </label>
        <textarea placeholder="Write here ..."></textarea>
      </form>
    </StyledInformation>
  );
}

export default Information;
