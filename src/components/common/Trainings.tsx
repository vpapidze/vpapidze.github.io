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
  gap: 8px;
`;

const TrainingContainer = styled.div`
  background: ${props => props.theme.trainingBackground};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px 12px;
`;

const Title = styled.h3`
  color: ${props => props.theme.tainingColor};
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  margin-bottom: 4px;

  svg {
    margin-right: 8px;
    color: ${props => props.theme.accentColor};
  }
`;

const State = styled.span`
  color: ${props => props.theme.sidebarMutedColor};
  font-size: 12px;
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
