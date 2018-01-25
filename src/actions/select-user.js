export const selectUser = (user) => {
    console.log("selectUser:", user);
    return {
        type: "USER_SELECTED",
        payload: user
    }
};