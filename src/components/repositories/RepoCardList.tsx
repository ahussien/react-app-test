import React, { Component } from "react";
import styled from "styled-components";
import RepoCard from "./RepoCard";

const RepoCardList = (props: any) => {
  return (
    <Container>
      {props.items.map((item: any) => (
        <RepoCard
          key={item.id}
          link={item.html_url}
          title={item.name}
          description={item.description}
          image={item.owner.avatar_url}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default RepoCardList;
