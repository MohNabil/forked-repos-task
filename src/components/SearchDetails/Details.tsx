import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store";
import styles from "./Details.module.css";

export const Details = () => {
	const repos: any = useSelector((state: RootState) => state.search);
	// console.log(repos, "repos");
	const [query, setQuery] = useState("");
	const [filteredRepos, setFilteredRepos] = useState([]);
	useEffect(() => {
		if (repos.length > 0 || !query) {
			setFilteredRepos(repos);
		}
		searchHandler();
	}, [repos, query]);
	const searchHandler = () => {
		if (query) {
			const filtered: any = repos.filter((item: any) =>
				item.owner.login.includes(query)
			);
			setFilteredRepos(filtered);
			// console.log(filteredRepos, "filtered");
		}
	};
	return (
		<div className={styles.detailsContainer}>
			<div>
				<Link to="/" className={styles.backLink}>
					Back to Main Page
				</Link>
			</div>
			<div className={styles.searchContainer}>
				<input
					type="text"
					placeholder="search by repo owner name"
					className={styles.searchInput}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<table className={styles.tableContainer}>
				<thead>
					<tr>
						<th>Repository Name</th>
						<th>Owner Name</th>
						<th>Number of Stars</th>
						<th>Repository Link</th>
					</tr>
				</thead>
				<tbody>
					{filteredRepos.length > 0 ? (
						filteredRepos.map((item: any) => {
							return (
								<tr key={item.id}>
									<td>{item.name}</td>
									<td>{item.owner.login}</td>
									<td>{item.stargazers_count}</td>
									<td>
										<a href={item.html_url} target="blank">
											{item.html_url}
										</a>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td>Loading...</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
