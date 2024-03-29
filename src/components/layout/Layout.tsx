import React from "react";
import styled, { css } from "styled-components"

interface Props {
  sidebar: React.ReactNode;
  main: React.ReactNode;
  fullWidth?: boolean;
}

const Container = styled.article<Pick<Props, 'fullWidth'>>`
  display: flex;
  ${props => !props.fullWidth && css`
    width: 1200px;
    margin: auto;
  `}
`;

const SidebarContainer = styled.aside`
  width: 350px;
`;

const MainContainer = styled.section`
  flex: 1;
`;

export const Layout = ({ sidebar, main, fullWidth }: Props) => {
  return (<Container fullWidth={fullWidth}>
    <SidebarContainer>
      {sidebar}
    </SidebarContainer>
    <MainContainer>
      {main}
    </MainContainer>
  </Container>);
};
