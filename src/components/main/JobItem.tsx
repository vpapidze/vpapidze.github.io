import styled from "styled-components";
import { IJob } from "../../types/types";
import { Tag, Tags } from "../common/Tag";
import { JobProject } from "./JobProject";

const Container = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 16px;
  padding-bottom: 16px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.mainTextColor};
  opacity: 0.75;
  line-height: 1.5;
  min-width: 110px;
  flex-shrink: 0;
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 4px;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 17px;
  font-weight: 600;
  color: ${props => props.theme.headingColor};

  span {
    font-size: 15px;
    font-weight: 400;
    opacity: 0.7;
  }
`;

const Location = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.mainTextColor};
  opacity: 0.65;
  font-style: italic;
  white-space: nowrap;
`;

const Projects = styled.div`
  margin: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
`;

const SectionTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.headingColor};
`;

export const JobItem = ({ startDate, endDate, title, company, location, technologies, projects }: IJob) => {
  return (<Container>
    <Date>{startDate} - {endDate}</Date>
    <Content>
      <Header>
        <Title>{title} <span>at</span> {company}</Title>
        <Location>{location === 'hybrid' ? 'Hybrid' : location === 'onsite' ? 'On-site' : 'Remote'}</Location>
      </Header>
      <Projects>
        {projects.map((p, idx) => (<JobProject key={idx} {...p} />))}
      </Projects>
      <Footer>
        <SectionTitle>Tools & Technologies:</SectionTitle>
        <Tags>
          {technologies.map((t, idx) => (<Tag key={idx} variant="main" title={t.value} icon={t.icon?.[1] || 'default'} iconPrefix={t.icon?.[0]} />))}
        </Tags>
      </Footer>
    </Content>
  </Container>);
};
