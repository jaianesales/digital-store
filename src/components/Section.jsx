import { Link } from "react-router-dom";
import styled from "styled-components";
import right24px from "../assets/right24px.svg";

const StyledBg = styled.div`
  width: 100%;
`;

const StyledSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;

    & h2 {
      color: var(--dark-grey-2);
      font-size: 1.5rem;
      margin-bottom: 40px;
    }

    & span {
      color: var(--primary);
      display: flex;
      gap: 8px;
    }
  }
`;

function Section({
  title,
  titleAlign = "start",
  color = "#FFFFFF",
  link,
  children,
  padd="60px 0"
}) {
  return (
    <StyledBg style={{ background: color, padding: padd }}>
      <StyledSection>
        <div className="title" style={{ justifyContent: titleAlign }}>
          <h2>{title}</h2>

          {link && (
            <Link to={link}>
              <span>
                Ver todos
                <img src={right24px} />
              </span>
            </Link>
          )}
        </div>
        {children}
      </StyledSection>
    </StyledBg>
  );
}

export default Section;
