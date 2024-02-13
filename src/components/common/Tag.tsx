import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface ITagsProps {
  iconPrefix?: string;
  icon?: string | 'default',
  title?: string;
}

export const Tags = styled.div<{ block?: boolean }>`
  display: flex;
  gap: 5px;
  flex-flow: wrap;
`;

const TagContainer = styled.div`
  background: ${props => props.theme.tagBackground};
  border-radius: 6px;
  padding: 2px 8px;
  display: inline;
  font-size: 16px;
  display: flex;
  gap: 4px;
`;

const IconContainer = styled.span`
  color: ${props => props.theme.tagColor};
  padding-top: 2px;
`;

const Title = styled.span`
  color: ${props => props.theme.tagColor};
  line-height: 22px;
  font-size: 14px;
`;

export const Tag = ({ title, icon, iconPrefix = 'fas' }: ITagsProps) => {
  return (<TagContainer>
    {icon && <IconContainer>
      <FontAwesomeIcon width={13} icon={[iconPrefix as IconPrefix, icon === 'default' ? 'hashtag' : icon as IconName]} />
    </IconContainer>}
    {title && <Title>{title}</Title>}
  </TagContainer>)
}
