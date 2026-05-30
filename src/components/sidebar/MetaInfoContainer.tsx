import styled from "styled-components";

interface Props {
  title: string;
  children?: any;
}

const Container = styled.div`
  padding: 0 12px;
  margin-bottom: 2px;
`;

const TitleContainer = styled.div`
  position: relative;
  margin-bottom: 6px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 0;
    border-top: 1px solid ${props => props.theme.sidebarBorderColor};
    top: 50%;
  }
`;

const Title = styled.span`
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${props => props.theme.sidebarTextColor};
  background-color: ${props => props.theme.primaryColor};
  padding-right: 8px;
  position: relative;
  z-index: 1;
`;

const ChildrenContainer = styled.div`
  padding-bottom: 10px;
  padding-left: 0;
`;

export const MetaInfoContainer = ({ title, children }: Props) => {

  return <Container>
    <TitleContainer>
      <Title>{title}</Title>
    </TitleContainer>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </Container>
};
