import styled from "styled-components";
import Logo from "./Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import iconShop from "../assets/iconShop.svg";
import iconSearch from "../assets/iconSearch.svg";
import { useState } from "react";

const StyledHeader = styled.header`
  width: 100%;

  .container {
    .header-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 26px 0;
      gap: 80px;

      .container-search {
        display: flex;
        input[type="text"] {
          min-width: 300px;
          width: 100%;
          font-size: 1rem;
          padding: 8px;
          background-color: var(--light-grey-3);
          border: none;
          border-radius: 4px 0 0 4px;
          color: var(--dark-grey-3);
          outline: none;
          border: 1px solid var(--light-grey-3);
          &:focus {
            border: 1px solid var(--light-grey-2);
          }
        }
        .icon-search {
          background-color: var(--light-grey-3);
          border-radius: 0 4px 4px 0;
          padding: 18px;
          cursor: pointer;
          transition: all ease-in-out 0.2s;
          & img {
            width: 16px;
          }

          &:hover {
            background-color: var(--light-grey-2);
          }
        }
      }
      .header-buttons {
        display: flex;
        gap: 20px;
        align-items: center;
        justify-content: space-between;

        & a {
          color: var(--dark-grey-3);
          font-weight: 600;
          font-size: 0.875rem;
          text-decoration: underline;
        }
      }
    }
  }
`;

const StyledButtonPrimary = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 32px;
  background-color: var(--primary);
  font-weight: bold;
  font-size: 1rem;
  color: var(--white);
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  #text {
    color: white;
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
  }

  &:hover {
    background-color: var(--tertiary);
  }
`;

const StyledNavLinks = styled.ul`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 26px;
  font-size: 1rem;
  padding: 10px 0 30px;

  & a {
    color: var(--dark-grey-3);
    transition: all ease-in-out 0.2s;
    font-weight: 500;
    &:visited {
      color: var(--dark-grey-3);
    }
    &:hover {
      color: var(--dark-grey);
    }
    &.active {
      color: var(--primary);
      font-size: 1rem;
      font-weight: bold;

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: var(--primary);
        margin-top: 4px;
      }
    }
  }
`;

function Header() {
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?filter=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <StyledHeader>
        <div className="container">
          <div className="header-search">
            <Link to={"/"}>
              <Logo />
            </Link>
            <div className="container-search">
              <input
                type="text"
                name=""
                id=""
                placeholder="Pesquisar produto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <div className="icon-search" onClick={handleSearch}>
                <img src={iconSearch} alt="Pesquisar" />
              </div>
            </div>
            <div className="header-buttons">
              <Link to={"/"}>Cadastre-se</Link>
              <StyledButtonPrimary>
                <Link to={"/"} id="text">
                  Entrar
                </Link>
              </StyledButtonPrimary>
            </div>
            <div className="icon">
              <Link to={"/productlisting"}>
                <img src={iconShop} alt="Carrinho de compras" />
              </Link>
            </div>
          </div>
          <StyledNavLinks>
            <Link
              to={"/"}
              className={location.pathname === "/" ? "active" : ""}
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/productlisting"}
              className={
                location.pathname === "/productlisting" ? "active" : ""
              }
            >
              <li>Produtos</li>
            </Link>
            <Link
              to={"/category"}
              className={location.pathname === "/category" ? "active" : ""}
            >
              <li>Categorias</li>
            </Link>
            <Link
              to={"/pedidos"}
              className={location.pathname === "/pedidos" ? "active" : ""}
            >
              <li>Meus Pedidos</li>
            </Link>
          </StyledNavLinks>
        </div>
      </StyledHeader>
    </>
  );
}

export default Header;
