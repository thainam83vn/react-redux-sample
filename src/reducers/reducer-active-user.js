export default function(state=null, action){
    console.log("Active user:",action);
    switch(action.type){
        case "USER_SELECTED":
            return action.payload;
            break;
    }
    return state;
}