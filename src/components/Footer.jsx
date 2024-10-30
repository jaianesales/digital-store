import styled from "styled-components";
import Logo from "./Logo";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import { Link } from "react-router-dom";
import InformationFooter from "./InformationFooter";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--dark-grey);
  color: var(--white);
  font-size: 1rem;

  #footer-geral {
    display: grid;
    grid-template-columns: 5fr 7fr;
    padding: 60px 0;

    #logo-footer {
      display: flex;
      flex-direction: column;
      gap: 30px;

      & p {
        max-width: 36ch;
        line-height: 1.5;
      }

      & ul {
        display: flex;
        gap: 30px;

        & li a {
            opacity: 0.7;
            transition: opacity ease-in-out 0.2s;

            &:hover {
                opacity: 1;
            }
        }
      }
    }

    #informacao-footer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      & a {
        color: var(--light-grey-2);
        transition: all ease-in-out 0.2s;

        &:visited {
          color: var(--light-grey-2);
        }

        &:hover {
          color: var(--white);
          font-weight: 400;
        }
      }

      #categorias {
        display: flex;
        flex-direction: column;
        gap: 30px;

        & ul {
          display: flex;
          flex-direction: column;
          gap: 20px;
          font-weight: 300;
        }
      }

      #contato {
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-weight: 300;
      }
    }
  }

  #footer-direitos {
    padding: 40px 0;
    display: flex;
    justify-content: center;
    border-top: 1px solid var(--white);
    font-size: 0.875rem;
    font-weight: 200;
  }
`;

const StyledLogo = styled(Logo)`
  width: auto;
  filter: brightness(10);
`;

function Footer() {
  const informations = [
    {
      text: "Sobre Digital Store",
      link: "/productlisting",
    },
    {
      text: "Segurança",
      link: "/productlisting",
    },
    {
      text: "Wishlist",
      link: "/productlisting",
    },
    {
      text: "Blog",
      link: "/productlisting",
    },
    {
      text: "Trabalhe conosco",
      link: "/productlisting",
    },
    {
      text: "Meus pedidos",
      link: "/productlisting",
    },
  ];
  return (
    <>
      <FooterContainer aria-label="rodapé">
        <div id="footer-geral" className="container">
          <div id="logo-footer">
            <Link to={ "/" }><StyledLogo /></Link>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              sequi accusamus modi dolores culpa. Adipisci dolores dolor dicta
              magni minima.
            </p>
            <ul>
              <li>
                <a href="http://facebook.com" target="_blank">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="http://instagram.com" target="_blank">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="http://x.com" target="_blank">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>

          <div id="informacao-footer" aria-label="informações">
            <InformationFooter
              title="Informação"
              informations={informations}
            />
            <div id="categorias">
              <h3>Categorias</h3>
              <ul>
                <li>
                  <Link to={"/productlisting"}>Camisetas</Link>
                </li>
                <li>
                  <Link to={"/productlisting"}>Calças</Link>
                </li>
                <li>
                  <Link to={"/productlisting"}>Bonés</Link>
                </li>
                <li>
                  <Link to={"/productlisting"}>Headphones</Link>
                </li>
                <li>
                  <Link to={"/productlisting"}>Tênis</Link>
                </li>
              </ul>
            </div>
            <div id="contato">
              <h3>Contato</h3>
              <p>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </p>
              <p>(85) 3051-3411</p>
            </div>
          </div>
        </div>

        <div id="footer-direitos" className="container">
          <span>© 2024 Digital Store</span>
        </div>
      </FooterContainer>
    </>
  );
}

export default Footer;
