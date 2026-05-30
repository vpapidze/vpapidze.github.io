import styled from "styled-components";
import { InfoContainer } from "./InfoContainer";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const SummaryContainer = styled.div`
  color: ${props => props.theme.mainTextColor};
  font-size: 15px;
  line-height: 1.65;
`;

export const Summary = () => {
  const { summary } = useContext(DataContext);

  return (<InfoContainer title="Summary">
    <SummaryContainer>{summary}</SummaryContainer>
  </InfoContainer>);
};
