import React, { Component } from "react";
import styled from "styled-components";
import UserCard from "./UserCard";

const UserCardList = (props:any) => {
  return (
    <Container>
      {props.items.map((item:any) => (
        <UserCard
          key={item.id}
          link={item.html_url}
          title={item.name}
          description={item.description}
          image={item.avatar_url}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default UserCardList;
