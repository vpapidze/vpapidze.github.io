import React from "react";
import styled, { css } from "styled-components"

interface Props {
  sidebar: React.ReactNode;
  main: React.ReactNode;
  fullWidth?: boolean;
}

const Container = styled.article<Pick<Props, 'fullWidth'>>`
  display: flex;
  min-height: 100vh;
  min-width: 1280px;
  background-color: ${props => props.theme.bodyBackground};

  ${props => !props.fullWidth && css`
    max-width: ${props.theme.pageMaxWidth};
    margin: 0 auto;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
  `}
`;

const SidebarContainer = styled.aside`
  width: ${props => props.theme.sidebarWidth};
  flex-shrink: 0;
  border-right: 1px solid ${props => props.theme.sidebarBorderColor};
`;

const MainContainer = styled.section`
  flex: 1;
  background-color: ${props => props.theme.mainBackground};
  min-width: 0;
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
