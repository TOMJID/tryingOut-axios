export const SET_COCKTAILS = "SET_COCKTAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case SET_COCKTAILS:
      return {
        ...state,
        cocktails: payload,
        loading: false,
        error: null,
      };
    case SET_LOADING:
      return { ...state, loading: payload };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
