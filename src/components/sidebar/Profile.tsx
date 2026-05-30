import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext";
import styled from "styled-components";

const ProfileContainer = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  padding: ${props => props.theme.sidebarPadding};
  padding-bottom: 8px;
`;

const ProfileImageContainer = styled.div`
  max-width: 55%;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.accentColor};
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const FullName = styled.h1`
  font-size: 28px;
  color: ${props => props.theme.sidebarTextColor};
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.02em;
  text-align: center;
`;

const Titles = styled.div`
  width: 100%;
  text-align: center;
  line-height: 1.5;
`;

const Title = styled.h2`
  font-size: 13px;
  color: ${props => props.theme.sidebarMutedColor};
  margin: 0;
  font-weight: 500;
  display: inline;
`;

const Separator = styled.span`
  font-size: 14px;
  margin: 0 6px;
  color: ${props => props.theme.sidebarMutedColor};
`;

export const Profile = () => {
  const { personalInfo } = useContext(DataContext);

  return <ProfileContainer>
    <ProfileImageContainer>
      <ProfileImage src={personalInfo.profileImage} alt="Profile" />
    </ProfileImageContainer>
    <FullName>{personalInfo.fullName}</FullName>
    <Titles>{personalInfo.titles.map((title, idx) => (<Title key={idx}>{title}{idx < personalInfo.titles.length -1 && <Separator>•</Separator>}</Title>))}</Titles>
  </ProfileContainer>
}
