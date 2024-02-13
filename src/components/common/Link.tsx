import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface ILink {
  href?: string;
  target?: '_blank' | '_self';
  rel?: string;
  hideIcon?: boolean;
  children: React.ReactNode;
}

const Anchor = styled.a`
  color: ${props => props.theme.hyperLinkColor};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Link = ({ href, target, children, hideIcon, ...rest }: ILink) => {
  return (<Anchor href={href} target={target} {...rest}>{!hideIcon && <FontAwesomeIcon icon={['fas', 'link']} height={10}/>} {children}</Anchor>);
}
