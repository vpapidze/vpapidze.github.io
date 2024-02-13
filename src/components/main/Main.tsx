import styled from "styled-components";
import { Summary } from "./Summary";
import { InfoContainer } from "./InfoContainer";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Education } from "./Education";
import { JobItem } from "./JobItem";

const MainContiner = styled.div`
  padding: ${props => props.theme.mainPadding};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Main = () => {
  const { eductaion, jobs } = useContext(DataContext);
  return <MainContiner>
    <Summary />
    <InfoContainer title="Work History">
      {jobs.map((job, idx) => (<JobItem key={idx} {...job} />))}
    </InfoContainer>
    <InfoContainer title="Education">
      {eductaion.map((ed, idx) => (<Education key={idx} {...ed} />))}
    </InfoContainer>
  </MainContiner>
};
