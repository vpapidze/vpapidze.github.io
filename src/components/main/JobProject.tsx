import styled from "styled-components"
import { IJobProject } from "../types/types";
import { Tag } from "../common/Tag";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Section = styled.div<{ flexDirection?: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  gap: 6px;

  ul {
    margin: 5px 0;
  }
`;

const SectionTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  line-height: 25px;
`;

export const JobProject = ({ title, description, responsibilities, url }: IJobProject) => {
  return (<Container>
    <Section>
      <SectionTitle>Project: </SectionTitle>
      <Tag title={title} />
    </Section>
    {description && (<Section flexDirection="column">
      <SectionTitle>Description: </SectionTitle>
      <span>{description}</span>
    </Section>)}
    {!!responsibilities.length && (<Section flexDirection="column">
      <SectionTitle>Responsibilities: </SectionTitle>
      <ul>
        {responsibilities.map((r, idx) => (<li key={idx}>{r}</li>))}
      </ul>
    </Section>)}
    {url && (<Section flexDirection="column">
      <SectionTitle>URL: </SectionTitle>
      <a href={url} target="_blank" rel="noreferrer">{url}</a>
    </Section>)}
  </Container>);
};
