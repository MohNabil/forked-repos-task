import React, { useState } from "react";
import styles from "./Modal.module.css";

interface Props {
	open: boolean;
	data: any;
}
export const Modal = (props: Props) => {
	const [close, setClose] = useState(false);
	const saveFavorite = () => {
		localStorage.setItem("favData", JSON.stringify(props.data));
		setClose(true);
	};
	return (
		<div
			className={`${props.open ? styles.modalOpen : styles.modalHide} ${
				close ? styles.modalHide : ""
			}`}
		>
			<div className={styles.modalContent}>
				<p>Are you sure you want to add to favorites?</p>
				<div className={styles.actions}>
					<button onClick={saveFavorite}>Yes</button>
					<button onClick={() => setClose(true)}>No</button>
				</div>
			</div>
		</div>
	);
};
