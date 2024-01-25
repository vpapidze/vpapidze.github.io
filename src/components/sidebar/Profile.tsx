import { useContext } from "react"
import { DataContext } from "../../contexts/DataContext";
import styled from "styled-components";

const ProfileContainer = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px 15px;
`;

const ProfileImageContainer = styled.div`
  max-width: 60%;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid ${props => props.theme.secondaryColor};
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const FullName = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.sidebarTextColor};
  margin: 0;
  font-weight: 500;
`;

const Titles = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 14px;
  color: ${props => props.theme.sidebarTextColor};
  margin: 0;
  font-weight: 500;
  display: inline;
`;

const Separator = styled.span`
  font-size: 20px;
  margin: 5px;
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