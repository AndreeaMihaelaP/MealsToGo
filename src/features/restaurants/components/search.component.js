import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "services/location/location.context";

import { SearchContainer } from "./search.styles";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);

  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onChangeSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const onSubmit = () => {
    search(searchKeyword);
  };

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        onSubmitEditing={onSubmit}
        onChangeText={onChangeSearch}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
