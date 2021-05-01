import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Modal } from "../modal/Modal";
import styles from "./Details.module.css";

export const Details = () => {
	const repos: any = useSelector((state: RootState) => state.search);
	console.log(repos, "repos");
	const [query, setQuery] = useState("");
	const [filteredRepos, setFilteredRepos] = useState([]);
	const [openModal, setOpenModal] = useState(false);
	const [addFav, setAddFav] = useState({});
	useEffect(() => {
		if (!query) {
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
	const renderTable = () => {
		return (
			<table className={styles.tableContainer}>
				<thead>
					<tr>
						<th>Repository Name</th>
						<th>Owner Name</th>
						<th>Number of Stars</th>
						<th>Repository Link</th>
						<th>Add To Favorite</th>
					</tr>
				</thead>
				<tbody>
					{filteredRepos.length > 0 &&
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
									<td>
										<button
											className={styles.addButton}
											onClick={() => {
												setAddFav({
													name: item.name,
													owner: item.owner.login,
													stars: item.stargazers_count,
													link: item.html_url,
												});
												setOpenModal(true);
											}}
										>
											Add to Favorite
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		);
	};

	return (
		<div className={styles.detailsContainer}>
			<div className={styles.searchContainer}>
				<input
					type="text"
					placeholder="search by repo owner name"
					className={styles.searchInput}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
			</div>
			<Modal open={openModal} data={addFav} />
			{repos.length === 0 ? (
				<div className={styles.emptyRepos}>
					<span>Loading...</span>
				</div>
			) : (
				renderTable()
			)}
		</div>
	);
};
