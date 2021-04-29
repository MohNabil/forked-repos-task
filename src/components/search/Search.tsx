import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getForkedRepos } from "../../actions/searchActions";
import styles from "./Search.module.css";

export const Search = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [query, setQuery] = useState("");
	const submitHandler = () => {
		dispatch(getForkedRepos(query));
		history.push("/details");
	};
	return (
		<div className={styles.searchContainer}>
			<input
				type="text"
				placeholder="Enter Owner/RepoName"
				className={styles.searchInput}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className={styles.searchButton} onClick={submitHandler}>
				Search
			</button>
		</div>
	);
};
