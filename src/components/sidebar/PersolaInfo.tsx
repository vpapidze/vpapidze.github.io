import styled from "styled-components";
import { MetaInfoContainer } from "./MetaInfoContainer"
import { DataContext } from "../../contexts/DataContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

const InfoContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Info = styled.li`
  display: flex;
  gap: 8px;
  color: ${props => props.theme.sidebarTextColor};
  a {
    color: inherit;
  }
`;

const IconContainer = styled.span`
  width: 20px;
  text-align: center;
`;

export const PersonalInfo = () => {
  const { personalInfo } = useContext(DataContext);

  return <MetaInfoContainer title="Personal Info">
    <InfoContainer>
      {personalInfo.details.map((i, idx) => (
        <Info key={idx}>
        <IconContainer>
          <FontAwesomeIcon icon={[i.iconPrefix as IconPrefix, i.icon as IconName]} />
        </IconContainer>
        {i.url ? <a href={i.url} target="_blank" rel="noreferrer">{i.value}</a> : i.value}
      </Info>
      ))}
    </InfoContainer>
  </MetaInfoContainer>
}