import styled from "styled-components";

export const SocialLink = styled.a`
  display: inline-block;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ReviewImage = styled.img`
  width: 100%;
`;

export const SocialColumn = styled.div`
  border-radius: 10px;
  position: absolute;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  right: 30px;
  top: 10%;
  padding: 30px;
  width: 300px;
  @media (max-width: 700px) {
    width: 100%;
    top: 100%;
    right: 0;
  }
`;

export const Text = styled.p`
  color: rgba(0, 0, 0, 0.7);
  margin-left: 10px;
  margin-bottom: 2px;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const LinkInput = styled.input`
  width: 161px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 5px;
  margin: 0 0 20px;
  font-size: 12px;
  @media (max-width: 700px) {
    width: 60%;
  }
`;

export const LinkButton = styled.button`
  width: calc(100% - 161px);
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 5px;
  margin: 0 0 20px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 12px;
  @media (max-width: 700px) {
    width: 40%;
  }
`;

export const HeaderRow = styled.div`
width:${props => (props.width ? props.width : "100%")};
height:${props => (props.height ? props.height : "100%")};
display: flex;
justify-content: ${props =>
  props.justifyContent ? props.justifyContent : "center"};
align-items:${props => (props.alignItems ? props.alignItems : "center")};
padding:${props => (props.padding ? props.padding : "0")};
flex-wrap ${props => (props.flexWrap ? props.flexWrap : "wrap")};
margin:${props => (props.margin ? props.margin : "0 auto")};
color: ${props => props.color};
@media (max-width: 1000px){
    flex-wrap: wrap;

    > div {
        min-width: 100%;
    }

    img {
        transform: scale(.7);
    }
}
`;

export const SideBarLinksColumn = styled.div`
  padding: 30px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  a {
    background: #fff;
    color: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(0, 0, 0, 0.25);
    display: block;
    text-align: center;
    padding: 20px;
    border-radius: 5px;
  }
  a.active {
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
  }

  @media (max-width: 1000px) {
    padding: 15px;
  }
`;

export const MainColumn = styled.div`
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 65%;
  background: #fff;

  @media (max-width: 1000px) {
    margin-top: 320px;
  }
  @media (max-width: 700px) {
    margin-top: 520px;
    width: 100%;
  }
`;

export const SideColumn = styled.div`
  width: 33%;
  @media (max-width: 1000px) {
    margin-top: 320px;
  }
  @media (max-width: 700px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const MainRow = styled.div`
  justify-content: space-between;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;

export const SideFooterImage = styled.img`
  width: 33%;
  height: auto;
`;

export const MainHeader = styled.h2`
  font-size: 20px;
  padding: 20px 3%;
  color: #000;
  font-weight: bold;
  width: 100%;
  ${props =>
    props.hasBottomBorder &&
    `border-bottom:0.5px solid rgba(0, 0, 0, 0.4);
    margin-bottom: 30px;
    `}

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const SectionHeader = styled.h3`
  font-size: 20px;
  padding: 0 0 20px;
  font-weight: bold;
  color: #000;
  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const RoundedCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: #fff;
  width: 90%;
  margin: 0 auto 17px;
  padding: 20px 20px 40px;
  ul {
    flex-wrap: wrap;
    justify-content: space-evenly
    padding: 0 20px;

    li {
      width: 45%;
      font-weight: bold;
      margin-bottom: 10px;
      @media (max-width: 700px) {
        width: 100%;
      }
    }
  }
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;

export const PageColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  flex-wrap: wrap;
  margin: 0 auto;
  overflow: hidden;
  @media (max-width: 1000px) {
    padding: 10px;
  }
`;

export const FAQTopicCards = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 22%;
  height: 110px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  cursor: pointer;
  svg {
    display: block;
    margin: -25px auto 0px;
    width: 50px;
    @media (max-width: 500px) {
      width: 30px;
    }
  }
  p {
    color: rgba(0, 0, 0, 0.7);
    font-size: 16px;
    margin: 0 auto 0;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 15px;
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
  @media (max-width: 500px) {
    height: 85px;
    width: 48%;
    margin-bottom: 10px;
  }
`;

export const FAQquestion = styled.div`
  background: #fff;
  width: 45%;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
  font-size: 16px;
  .faq-question {
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      min-width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 20px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      margin-right: 10%;
    }
    p {
      margin: 0;
    }
  }
  .faq-answer {
    padding: 20px;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const ReviewItemWrapper = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ReviewItemRating = styled.div`
  padding: 1vw;
  background: #fff;
  border-radius: 5px;
  width: 25%;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  > svg {
    width: 80px;
    height: 80px;
    display: block;
    margin: 0 auto 20px;
  }

  div {
    svg {
      margin-left: 5px;
    }
  }
  b {
    font-size: 20px;
    margin-left: 1vw;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ReviewItemInfo = styled.div`
  width: 74%;
  padding: 1vw;
  border-radius: 5px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h3 {
    color: #000;
    font-size: 22px;
  }
  p {
    color: rgba(0, 0, 0, 0.7);
    @media (max-width: 700px) {
      min-height: 100px;
    }
  }
  a {
    color: #4cbeed;
    position: absolute;
    bottom: 1vw;
    left: 1vw;
    cursor: pointer;
    font-size: 14px;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
