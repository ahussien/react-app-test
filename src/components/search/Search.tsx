import React, { Component, useState, useRef } from "react";
import _ from "lodash";
import styled from "styled-components";
import SearchBox from "./SearchBox";
import RepoCardList from "../repositories/RepoCardList";
import UserCardList from "../users/UserCardList";
import Api from "../../services/api";
import styles from "../../styles.module.css";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchText, setSearchText] = useState('');

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */

   console.log(searchText);
  const isShownMiddle = !searchText || searchText.length < 3 || searchText === "";

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const debouncedSearch = useRef(
    _.debounce(
      (searchType: string, searchText: string) =>
        search(searchType, searchText),
      1000
    )
  ).current;

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const Status = ({ status }: any) => {
    if (status === "") {
      return <div></div>;
    }
    if (status === "loading") {
      return <div style={{ marginLeft: "15px" }}>Loading Data ...</div>;
    }
    if (status === "error") {
      return <div style={{ marginLeft: "15px" }}>Something went wrong ...</div>;
    }
    return null;
  };

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const resetSearchPage = () => {
    setSearchResults([]);
    setStatus("");
  };

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  const onSearchChange = (searchType: string, searchText: string) => {
    setSearchType(searchType);
    setSearchText(searchText);
    resetSearchPage();

    if (searchText && searchText.length >= 3) {
      debouncedSearch(searchType, searchText);
    }
  };

  /**
   * In charge to send the value
   * to the API.
   * @param {*} value
   */
  const search = async (searchType: string, searchText: string) => {
    setStatus("loading");
    try {
      const { data } = await Api.getSearchGithub(searchType, searchText);
      setSearchResults(data);
      setStatus("");
    } catch (error) {
      setStatus("error");
    }
  };

  /**
   * This will be called every time there is
   * a change in the input
   * @param {*} { target: { value } }
   */
  return (
    <div className={isShownMiddle ? styles.containercentred : styles.container}>
      <SearchBox
        placeholder="Enter Repository Name"
        buttonText="Search"
        onSearchChange={onSearchChange}
      />

      <Status status={status} />

      {searchType === "repositories" ? (
        <RepoCardList items={searchResults} />
      ) : (
        <UserCardList items={searchResults} />
      )}
    </div>
  );
};

export default Search;
