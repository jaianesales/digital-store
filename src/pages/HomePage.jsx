import styled from "styled-components";
import Section from "../components/Section";
import collection1 from "../../public/collection1.png";
import collection2 from "../../public/collection2.png";
import collection3 from "../../public/collection3.png";
import { Link } from "react-router-dom";
import bone from "../assets/bone.svg";
import calcas from "../assets/calcas.svg";
import camisetas from "../assets/camisetas.svg";
import headphones from "../assets/headphones.svg";
import tenis from "../assets/tenis.svg";

const StyledImgColecao = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  box-sizing: border-box;

  & div {
    position: relative;
    img {
      width: 100%;
    }
  }
`;

const StyledButtonSecondary = styled.button`
  position: absolute;
  border: none;
  border-radius: 4px;
  padding: 16px 20px;
  background-color: var(--light-grey-3);
  font-weight: bold;
  font-size: 1rem;
  color: var(--primary);
  left: 8%;
  bottom: 12%;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    color: var(--white);
    background-color: var(--primary);
  }
`;

const StyledIconsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  box-sizing: border-box;
`;

const StyledIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  .icons-circle {
    max-width: 150px;
    border-radius: 50%;
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: grayscale(1);
    transition: all ease-in-out 0.2s;

    &:hover {
      filter: grayscale(0);
    }

    & img {
      width: 100%;
      height: auto;
    }
  }
`;

function HomePage() {
  return (
    <>
      <Section title={"Coleções em destaque"}>
        <StyledImgColecao>
          <div>
            <img src={collection1} alt="" />
            <Link to={"/productlisting"}>
              <StyledButtonSecondary>Comprar</StyledButtonSecondary>
            </Link>
          </div>
          <div>
            <img src={collection2} alt="" />
            <Link to={"/productlisting"}>
              <StyledButtonSecondary>Comprar</StyledButtonSecondary>
            </Link>
          </div>
          <div>
            <img src={collection3} alt="" />
            <Link to={"/productlisting"}>
              <StyledButtonSecondary>Comprar</StyledButtonSecondary>
            </Link>
          </div>
        </StyledImgColecao>
      </Section>
      <Section title={"Coleções em destaque"} titleAlign="center">
        <StyledIconsContainer>
          <StyledIcons>
            <Link to={"/productlisting"}>
              <div className="icons-circle">
                <img src={camisetas} alt="camisetas" />
              </div>
            </Link>
            <h4>Camisetas</h4>
          </StyledIcons>
          <StyledIcons>
            <Link to={"/productlisting"}>
              <div className="icons-circle">
                <img src={calcas} alt="calças" />
              </div>
            </Link>
            <h4>Calças</h4>
          </StyledIcons>
          <StyledIcons>
            <Link to={"/productlisting"}>
              <div className="icons-circle">
                <img src={bone} alt="Bonés" />
              </div>
            </Link>
            <h4>Bonés</h4>
          </StyledIcons>
          <StyledIcons>
            <Link to={"/productlisting"}>
              <div className="icons-circle">
                <img src={headphones} alt="headphones" />
              </div>
            </Link>
            <h4>Headphones</h4>
          </StyledIcons>
          <StyledIcons>
            <Link to={"/productlisting"}>
              <div className="icons-circle">
                <img src={tenis} alt="Tênis" />
              </div>
            </Link>
            <h4>Tênis</h4>
          </StyledIcons>
        </StyledIconsContainer>
      </Section>
      <Section
        title={"Produtos em alta"}
        titleAlign="space-between"
        link={"/productlisting"}
      >
        <h1>teste</h1>
      </Section>
    </>
  );
}

export default HomePage;
