import styled from "styled-components";
import { MetaInfoContainer } from "./MetaInfoContainer";
import { PersonalInfo } from "./PersolaInfo";
import { Profile } from "./Profile";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Tag, Tags } from "../common/Tag";
import { Trainings, Training } from "../common/Trainings";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  background-color: ${prop => prop.theme.primaryColor};
  padding-bottom: 24px;
`;

export const Sidebar = () => {
  const { personalInfo: { skills: { softSkills, aiSkills, cloudSkills, frontEndSkills, mobileSkills, backEndSkills, devOpsSkills, tools, os, languages }, }, trainings } = useContext(DataContext);

  return <Container>
    <Profile />
    <PersonalInfo />
    <MetaInfoContainer title="AI Skills">
      <Tags $compact>
        {aiSkills.map((skill, idx) => (<Tag key={idx} icon={skill.icon || 'default'} iconPrefix={skill.iconPrefix} title={skill.value} />))}
      </Tags>
    </MetaInfoContainer>
    <MetaInfoContainer title="Cloud Skills">
      <Tags $compact>
        {cloudSkills.map((skill, idx) => (<Tag key={idx} icon={skill.icon || 'default'} iconPrefix={skill.iconPrefix} title={skill.value} />))}
      </Tags>
    </MetaInfoContainer>
    <MetaInfoContainer title="Front-End Skills">
      <Tags $compact>
        {frontEndSkills.map((skill, idx) => (<Tag key={idx} icon={skill.icon || 'default'} iconPrefix={skill.iconPrefix} title={skill.value} />))}
      </Tags>
    </MetaInfoContainer>
    <MetaInfoContainer title="Mobile Skills">
      <Tags $compact>
        {mobileSkills.map((skill, idx) => (<Tag key={idx} icon={skill.icon || 'default'} iconPrefix={skill.iconPrefix} title={skill.value} />))}
      </Tags>
    </MetaInfoContainer>
    <MetaInfoContainer title="Back-End Skills">
      <Tags $compact>
        {backEndSkills.map((skill, idx) => (<Tag key={idx} icon={skill.icon || 'default'} iconPrefix={skill.iconPrefix} title={skill.value} />))}
      </Tags>
    </MetaInfoContainer>
    <MetaInfoContainer title="DevOps Skills">
      <Tags $compact>
        {devOpsSkills.map((skill, idx) => (<Tag key={idx} icon={skill.icon || 'default'} iconPrefix={skill.iconPrefix} title={skill.value} />))}
      </Tags>
    </MetaInfoContainer>
    <MetaInfoContainer title="Tools">
      <Tags $compact>
        {tools.map((skill, idx) => (<Tag key={idx} icon={skill.icon || 'default'} iconPrefix={skill.iconPrefix} title={skill.value} />))}
      </Tags>
    </MetaInfoContainer>
    <MetaInfoContainer title="OS">
      <Tags $compact>
        {os.map((skill, idx) => (<Tag key={idx} icon={skill.icon || 'default'} iconPrefix={skill.iconPrefix} title={skill.value} />))}
      </Tags>
    </MetaInfoContainer>
    <MetaInfoContainer title="Languages">
      <Tags $compact>
        {languages.map((lang, idx) => (<Tag key={idx} title={lang} />))}
      </Tags>
    </MetaInfoContainer>
    <MetaInfoContainer title="Trainings & Certifications">
      <Trainings>
        {trainings.map((tr, idx) => (<Training key={idx} title={tr.title} icon={[tr.iconPrefix as IconPrefix, tr.icon as IconName]} certified={tr.certified} />))}
      </Trainings>
    </MetaInfoContainer>
    <MetaInfoContainer title="Soft Skills">
      <Tags $compact>
        {softSkills.map((skill, idx) => (<Tag key={idx} icon="default" title={skill} />))}
      </Tags>
    </MetaInfoContainer>
  </Container>
}
