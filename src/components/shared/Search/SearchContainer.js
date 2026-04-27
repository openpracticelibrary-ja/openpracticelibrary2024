/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import * as JsSearch from "js-search";
import PracticeCardGrid from "../PracticeCards/PracticeCardGrid";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function SearchContainer(props) {
  const practiceData = props.practices;

  const [state, setState] = React.useState({
    search: [],
    searchResults: practiceData,
    isLoading: true,
    isError: false,
    searchQuery: "",
  });

  const searchData = (e) => {
    const { search } = state;
    const queryResult = search.search(e.target.value);
    e.target.value === ""
      ? setState({
          ...state,
          searchQuery: e.target.value,
          searchResults: practiceData,
        })
      : setState({
          ...state,
          searchQuery: e.target.value,
          searchResults: queryResult,
        });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    const dataToSearch = new JsSearch.Search(["node", "id"]);

    // AllSubstringsIndexStrategy enables partial matching (required for CJK text)
    dataToSearch.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();

    // Custom tokenizer: groups consecutive CJK characters as a single token
    // so that substring indexing works correctly for Japanese/Chinese/Korean.
    // The default SimpleTokenizer uses /[^a-zа-яё0-9\-']+/i which discards CJK chars entirely.
    dataToSearch.tokenizer = {
      tokenize(text) {
        const tokens = [];
        let currentToken = "";
        let isCurrentCJK = false;

        for (const char of text) {
          const code = char.codePointAt(0);
          const isCJK =
            (code >= 0x3000 && code <= 0x9fff) || // CJK, Hiragana, Katakana
            (code >= 0xac00 && code <= 0xd7af) || // Hangul
            (code >= 0xf900 && code <= 0xfaff); // CJK Compatibility Ideographs

          if (isCJK) {
            if (currentToken && !isCurrentCJK) {
              tokens.push(currentToken.toLowerCase());
              currentToken = "";
            }
            currentToken += char;
            isCurrentCJK = true;
          } else if (/[a-zA-Zа-яёА-ЯЁ0-9\-']/.test(char)) {
            if (currentToken && isCurrentCJK) {
              tokens.push(currentToken);
              currentToken = "";
            }
            currentToken += char;
            isCurrentCJK = false;
          } else {
            if (currentToken) {
              tokens.push(isCurrentCJK ? currentToken : currentToken.toLowerCase());
              currentToken = "";
            }
            isCurrentCJK = false;
          }
        }

        if (currentToken) {
          tokens.push(isCurrentCJK ? currentToken : currentToken.toLowerCase());
        }

        return tokens.filter((t) => t.length > 0);
      },
    };

    dataToSearch.addIndex(["node", "frontmatter", "title"]);
    dataToSearch.addIndex(["node", "frontmatter", "subtitle"]);
    dataToSearch.addDocuments(practiceData);
    setState({
      ...state,
      search: dataToSearch,
      isLoading: false,
    });
  }, []);

  return (
    <>
      <Box mx="auto" width={{ xs: 1, sm: "60%" }}>
        <form onSubmit={handleSubmit}>
          <TextField
            id="Search"
            variant="outlined"
            value={state.searchQuery}
            onChange={searchData}
            data-testid="searchTextField"
            placeholder="Know the name of the practice?"
            disabled={state.isLoading}
            fullWidth
            size="small"
          />
        </form>
      </Box>
      <Box my={4}>
        <PracticeCardGrid practices={state.searchResults} />
      </Box>
    </>
  );
}
