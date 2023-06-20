export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectRefreshing = state => state.auth.isRefreshing;
export const selectIsLoginIn = state => state.auth.isLoginIn;
