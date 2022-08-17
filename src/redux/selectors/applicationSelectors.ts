import { createSelector } from "reselect";
import { AppState } from "../reducer";

const latestBlockNumber = (state: AppState) => state.application.latestBlockNumber;

export const useBlockNumber = createSelector(
    latestBlockNumber,
    (latestBlockNumber) => latestBlockNumber
);
