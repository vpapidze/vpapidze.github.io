import styled from "styled-components";
import { IJob } from "../types/types";

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
  font-size: 16px;
  font-weight: 400;
  opacity: 0.8;
  font-style: italic;
`;

type Location = IJob['location'];

// const LOCATIONS: { [Location]: string} = {
//   [lo]
// }

export const JobItem = ({ startDate, endDate, title, company, location }: IJob) => {
  return (<Container>
    <Date>{startDate} - {endDate}</Date>
    <Content>
      <Header>
        <Title>{title} <span>at</span> {company}</Title>
        <Location>{location === 'hybrid' ? 'Hybrid' : location==='onsite' ? 'On-site': 'Remote'}</Location>
      </Header>
    </Content>
  </Container>)
};
