import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface Itraining {
  title: string;
  icon: [IconPrefix, IconName];
  certified: boolean;
}

export const Trainings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TrainingContainer = styled.div`
  background: ${props => props.theme.trainingBackground};
  border-radius: 5px;
  padding: 5px 10px;;
`;

const Title = styled.h3`
  color: ${props => props.theme.tainingColor};
  font-size: 16px;
  margin: 0;
  padding: 0;
  margin-bottom: 2px;

  svg {
    margin-right: 5px;
  }
`;

const State = styled.span`
  color: ${props => props.theme.tainingColor};
  font-size: 13px;
`;

export const Training = ({ title, icon, certified = false }: Itraining) => {
  return <TrainingContainer>
    <Title>
      <FontAwesomeIcon icon={icon} />
      {title}
    </Title>
    <State>{certified ? 'Certified' : 'Preparing'}</State>
  </TrainingContainer>
};
