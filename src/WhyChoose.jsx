import styled from "styled-components";
import ButtonDesign from "./ButtonDesign";

const StyledWhyChoose = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
  margin: 0 2rem;
`;

const Hook = styled.div`
  width: 50%;
  padding: 0 1rem;

  h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin: 0;
  }
  p {
    color: #818080ae;
  }
`;

const Details = styled.div`
  width: 50%;
  padding: 0 1rem;
`;

const Detail = styled.div`
  display: flex;
  column-gap: 1rem;
`;

const DetailImage = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover;
  }
`;

const HeadingColor = styled.h3`
  color: #ff7231;
`;
function WhyChoose() {
  return (
    <StyledWhyChoose>
      <Hook>
        <HeadingColor>Why Choose Us</HeadingColor>
        <h1>Best valued deals you will ever find </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, sed
          distinctio tempora commodi reprehenderit ipsum beatae, nemo error
          eligendi nisi at qui, necessitatibus vero amet.
        </p>
        <ButtonDesign>Find more details</ButtonDesign>
      </Hook>
      <Details>
        <Detail>
          <DetailImage>
            <img src="/car-round.png" alt="" />
          </DetailImage>
          <div>
            <h2>Cross Country Drive</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
              sunt dignissimos nesciunt reprehenderit vero? Esse.
            </p>
          </div>
        </Detail>
        <Detail>
          <DetailImage>
            <img src="/dollar-round.png" alt="" />
          </DetailImage>
          <div>
            <h2>All Inclusive Pricing</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              facilis accusamus, minus repellendus quod eius?
            </p>
          </div>
        </Detail>
        <Detail>
          <DetailImage>
            <img src="/hand-dollar-round.png" alt="" />
          </DetailImage>
          <div>
            <h2>No hidden Charges</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus perferendis deserunt non consectetur, mollitia modi?
            </p>
          </div>
        </Detail>
      </Details>
    </StyledWhyChoose>
  );
}

export default WhyChoose;
