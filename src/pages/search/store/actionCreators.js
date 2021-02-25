import { SET_HOT_KEYWRODS, SET_RESULT_LIST, SET_ENTER_LOADING } from './constants';
import { reqsearchhot, reqsearchkeywords } from '../../../api/index';
const changeHotKeyWords = (data) => ({
    type: SET_HOT_KEYWRODS,
    data: data
});
export const changeSearchResult = (data) => ({
    type: SET_RESULT_LIST,
    data: data
});

export const changeEnterLoading = (data) => ({
    type: SET_ENTER_LOADING,
    data
});
export const getHotKeyWords = () => {
    return dispatch => {
        reqsearchhot().then(data => {
            let list = data.data.data.hot;
            dispatch(changeHotKeyWords(list));
        })
    }
};
export const getSearchList = (query) => {
    return dispatch => {
        dispatch(changeEnterLoading(true))
        reqsearchkeywords(query).then(({ data }) => {
            // console.log(data)
            if (data.success && data.data.searchData.length > 0) {
                let res = data.data.searchData || [];
                dispatch(changeSearchResult(res));
            }
            dispatch(changeEnterLoading(false));
        }).catch(e => {
            console.log('error: ', e)
            // dispatch(changeEnterLoading(false));
        })
        // .finally(() => {
        //     dispatch(changeEnterLoading(false));
        // })

    }
};