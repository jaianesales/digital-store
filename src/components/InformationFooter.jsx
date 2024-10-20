import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledInformationFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-weight: 300;
  }
`;

const InformationFooter = ({ title, informations }) => {
  return (
    <StyledInformationFooter>
      <h3>{title}</h3>
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <Link to={info.link}>{info.text}</Link>
          </li>
        ))}
      </ul>
    </StyledInformationFooter>
  );
};

export default InformationFooter;