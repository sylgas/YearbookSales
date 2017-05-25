import {createSelector} from "reselect";

const getDeadlines = (state) => state.deadlines.ordered;

const extendWithSubmittedPages = (deadlines, totalSubmitted) => {
    if (!deadlines.length) {
        return [];
    }
    const deadline = deadlines[0];
    const submitted = deadline.pages < totalSubmitted ? deadline.pages : totalSubmitted;
    const deadlineWrapper = Object.assign({}, deadline, {submitted});
    return [deadlineWrapper, ...extendWithSubmittedPages(deadlines.slice(1), totalSubmitted - submitted)];
};

const calculatePages = (deadlines) => {
    if (!deadlines.length) {
        return 0;
    }
    return deadlines.reduce((sum, d2) => sum + d2.pages, 0);
};

export const getTotalSubmitted = (state) => state.deadlines.totalSubmitted;

export const getDeadlinesWithSubmittedPages = createSelector([getDeadlines, getTotalSubmitted],
    (deadlines, totalSubmitted) => extendWithSubmittedPages(deadlines, totalSubmitted));

export const getTotalPages = createSelector([getDeadlines], (deadlines) => calculatePages(deadlines));