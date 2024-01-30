import styled from "styled-components";
import { IJob } from "../types/types";
import { Tag, Tags } from "../common/Tag";
import { JobProject } from "./JobProject";

const Container = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 10px;
  padding-bottom: 10px;
`;

const Date = styled.div`
  font-size: 14px;
  opacity: 0.8;
  line-height: 25px;
`;

const Content = styled.div`
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 500;

  span {
    font-size: 16px;
    font-weight: 400;
    opacity: 0.8;
  }
`;

const Location = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.8;
  font-style: italic;
`;

const Projects = styled.div`
  margin: 10px 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const SectionTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
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
          {technologies.map((t, idx) => (<Tag key={idx} title={t.value} icon={t.icon?.[1] || 'default'} iconPrefix={t.icon?.[0]} />))}
        </Tags>
      </Footer>
    </Content>
  </Container>);
};
