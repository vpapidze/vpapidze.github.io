import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

interface ITagsProps {
  iconPrefix?: string;
  icon?: string | 'default',
  title?: string;
  variant?: 'sidebar' | 'main';
}

export const Tags = styled.div<{ $compact?: boolean }>`
  display: flex;
  gap: ${props => props.$compact ? props.theme.tagSidebarGap : '6px'};
  flex-flow: wrap;
`;

const TagContainer = styled.div<{ $variant: 'sidebar' | 'main' }>`
  display: flex;
  align-items: center;
  line-height: 1.3;

  ${props => props.$variant === 'sidebar' ? css`
    border-radius: 6px;
    padding: 3px 9px;
    gap: 4px;
    background: ${props.theme.tagBackground};
    border: 1px solid rgba(255, 255, 255, 0.1);
  ` : css`
    border-radius: 8px;
    padding: 4px 10px;
    gap: 5px;
    background: ${props.theme.tagMainBackground};
    border: 1px solid ${props.theme.borderColor};
  `}
`;

const IconContainer = styled.span<{ $variant: 'sidebar' | 'main' }>`
  color: ${props => props.$variant === 'sidebar' ? props.theme.tagColor : props.theme.tagMainColor};
  display: flex;
  align-items: center;
  font-size: ${props => props.$variant === 'sidebar' ? '11px' : '12px'};
`;

const Title = styled.span<{ $variant: 'sidebar' | 'main' }>`
  color: ${props => props.$variant === 'sidebar' ? props.theme.tagColor : props.theme.tagMainColor};
  font-weight: 500;
  font-size: ${props => props.$variant === 'sidebar' ? '12px' : '13px'};
`;

export const Tag = ({ title, icon, iconPrefix = 'fas', variant = 'sidebar' }: ITagsProps) => {
  const iconSize = variant === 'sidebar' ? 11 : 12;

  return (<TagContainer $variant={variant}>
    {icon && <IconContainer $variant={variant}>
      <FontAwesomeIcon width={iconSize} icon={[iconPrefix as IconPrefix, icon === 'default' ? 'hashtag' : icon as IconName]} />
    </IconContainer>}
    {title && <Title $variant={variant}>{title}</Title>}
  </TagContainer>)
}
