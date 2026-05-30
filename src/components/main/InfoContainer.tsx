import styled from "styled-components";

interface IInfoContainer {
  title: string;
  children: React.ReactNode;
}

const Container = styled.div`
  color: ${props => props.theme.mainTextColor};
`;

const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 12px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 0;
    border-top: 1px solid ${props => props.theme.borderColor};
    top: 50%;
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${props => props.theme.headingColor};
  margin-left: 0;
  background-color: ${props => props.theme.mainBackground};
  padding: 0 12px 0 0;
  position: relative;
  z-index: 1;
`;

const ChildrenContainer = styled.div`
  padding: 4px 0 8px 0;
`;

export const InfoContainer = ({ title, children }: IInfoContainer) => {
  return (<Container>
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
    <ChildrenContainer>{children}</ChildrenContainer>
  </Container>);
};
