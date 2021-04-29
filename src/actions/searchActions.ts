import { ThunkDispatch } from "redux-thunk";
import { GET_SEARCH } from "./actionTypes";
import { Action } from "redux";
import { RootState } from "../store";

export const getForkedRepos = (query: string) => async (
	dispatch: ThunkDispatch<RootState, void, Action>
) => {
	const owner = query.split("/")[0];
	const repo = query.split("/")[1];
	try {
		const result = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/forks`,
			{
				headers: {
					Accept: "application/vnd.github.v3+json",
				},
			}
		);
		const res = await result.json();
		// console.log(res, "result");
		if (res) {
			dispatch({ type: GET_SEARCH, payload: res });
		}
	} catch (err) {
		console.log(err, "err");
	}
};
