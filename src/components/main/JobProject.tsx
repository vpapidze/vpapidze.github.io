import styled from "styled-components"
import { IJobProject } from "../../types/types";
import { Tag } from "../common/Tag";
import { Link } from "../common/Link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Section = styled.div<{ flexDirection?: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  gap: 8px;

  ul {
    margin: 0;
    padding-left: 22px;
    li {
      margin: 4px 0;
      line-height: 1.55;
    }
  }

  > span {
    line-height: 1.6;
  }
`;

const SectionTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.headingColor};
  line-height: 1.5;
  flex-shrink: 0;
`;

export const JobProject = ({ title, description, responsibilities, url }: IJobProject) => {
  return (<Container>
    <Section>
      <SectionTitle>Project: </SectionTitle>
      <Tag variant="main" title={title} />
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
      <Link href={url} target="_blank" rel="noreferrer">{url}</Link>
    </Section>)}
  </Container>);
};
