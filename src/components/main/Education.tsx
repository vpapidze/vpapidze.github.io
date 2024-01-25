import styled from "styled-components";
import { IEducation } from "../types/types";

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

const Content = styled.div``;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 18px;
  font-weight: 500;
`;

const University = styled.p`
  margin: 0;
  padding: 0;
  opacity: 0.8;
  font-size: 16px;
`;

export const Education = ({ startDate, endDate, degree, field, university }: IEducation) => {
  return (<Container>
    <Date>{startDate} - {endDate}</Date>
    <Content>
      <Title>{degree} of {field}</Title>
      <University>{university}</University>
    </Content>
  </Container>)
};
