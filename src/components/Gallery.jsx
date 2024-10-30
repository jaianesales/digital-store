import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;

  .content {
    max-width: 50%;
    max-height: 300px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;

    & h1 {
      font-size: 4rem;
      max-width: 12ch;
      color: var(--dark-grey);
    }
    & h3 {
      color: var(--warning);
    }
    & p {
      line-height: 1.5;
      max-width: 40ch;
    }
  }

  .indicators {
    width: 260px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: calc(50% - 130px);
    bottom: 30px;

    .indicator {
      width: 12px;
      height: 12px;
      background-color: var(--light-grey-3);
      border-radius: 50%;
      transition: all ease-in-out 0.5s;

      &.active {
        background-color: var(--primary);
        border: 1px solid var(--white);
        transform: scale(1.8);

      }
    }
  }
`;

const StyledButtonPrimary = styled.button`
  max-width: 200px;
  border: none;
  border-radius: 4px;
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

function Gallery() {
  const imagens = [
    { src: "/home-slide-0.jpg" },
    { src: "/home-slide-1.jpeg" },
    { src: "/home-slide-2.jpeg" },
    { src: "/home-slide-3.jpeg" },
    { src: "/home-slide-4.jpeg" },
    { src: "/home-slide-5.jpeg" },
    { src: "/home-slide-6.jpeg" },
    { src: "/home-slide-7.jpeg" },
    { src: "/home-slide-8.jpeg" },
  ];

  // Estado para controlar a imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efeito para atualizar a imagem a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, [imagens.length]);

  // Função para mudar a imagem ao clicar na bolinha
  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "681px",
          backgroundImage: `url(${imagens[currentImageIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <StyledContent>
          <div className="content">
            <h3>Melhores ofertas personalizadas</h3>
            <h1>Queima de stoque Nike 🔥</h1>
            <p>
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <StyledButtonPrimary>
              <Link to={"/productview"} id="text">
                Ver Ofertas
              </Link>
            </StyledButtonPrimary>
          </div>

          {/* Indicadores de bolinha */}
          <div className="indicators">
            {imagens.map((_, index) => (
              <div
                key={index}
                className={`indicator ${
                  index === currentImageIndex ? "active" : ""
                }`}
                onClick={() => handleIndicatorClick(index)}
              ></div>
            ))}
          </div>
        </StyledContent>
      </div>
    </>
  );
}

export default Gallery;
