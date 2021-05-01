import React, { useEffect, useState } from "react";
import styles from "./Favorites.module.css";

export const Favorites = () => {
	const [allFavs, setAllFavs] = useState<any>([]);
	useEffect(() => {
		const data: any = localStorage.getItem("favData");
		const favData = JSON.parse(data);
		setAllFavs([...allFavs, favData]);
	}, []);
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>My Favorites</h2>
			<div className={styles.content}>
				<table>
					<thead>
						<tr>
							<th>Repository Name</th>
							<th>Owner Name</th>
							<th>Number of Stars</th>
							<th>Repository Link</th>
						</tr>
					</thead>
					<tbody>
						{allFavs &&
							allFavs.map((item: any) => (
								<tr key={item.name}>
									<td>{item.name}</td>
									<td>{item.owner}</td>
									<td>{item.stars}</td>
									<td>
										<a href={item.link}>{item.link}</a>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
