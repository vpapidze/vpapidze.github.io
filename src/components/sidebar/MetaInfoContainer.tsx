import styled from "styled-components";

interface Props {
  title: string;
  children?: any;
}

const Container = styled.div`
  padding-left:  ${props => props.theme.padding};
`;

const TitleContainer = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 0px;
    border-top: 1px solid ${props => props.theme.secondaryColor};
    top: 60%;
  }
`;

const Title = styled.span`
  font-size: 20px;
  color: ${props => props.theme.sidebarTextColor};
  background-color: ${props => props.theme.primaryColor};
  padding-right:  5px;
  position: relative;
  z-index: 1;
`;

const ChildrenContainer = styled.div`
  padding: ${props => props.theme.padding};
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
