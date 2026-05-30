import styled from "styled-components";
import { IEducation } from "../../types/types";

const Container = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 16px;
  padding-bottom: 16px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.mainTextColor};
  opacity: 0.75;
  line-height: 1.5;
  min-width: 110px;
  flex-shrink: 0;
`;

const Content = styled.div``;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 17px;
  font-weight: 600;
  color: ${props => props.theme.headingColor};
`;

const University = styled.p`
  margin: 4px 0 0;
  padding: 0;
  color: ${props => props.theme.mainTextColor};
  opacity: 0.75;
  font-size: 15px;
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
