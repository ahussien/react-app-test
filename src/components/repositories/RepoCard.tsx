import React, { Component } from "react";
import styled from "styled-components";

const RepoCard = (props: any) => {
  return (
    <Container>
      <a href={props.link}>
        <Image src={props.image} />
      </a>
      <CardBody>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </CardBody>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  flex-basis: 25%;
  margin: 15px;
  border: solid 1px lightgray;
  text-align: center;
  // border-radius: 5px;

  @media (max-width: 768px) {
    & {
      flex: 1;
      flex-basis: 40%;
    }
  }
`;

const CardBody = styled.div`
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 15px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 12px;
  text-align: center;
`;

const Image = styled.img`
  width: 30%;
`;

export default RepoCard;
