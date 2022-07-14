
const initialState = 10;

 const changeCounter = (state = initialState, action) =>{

    switch (action.type) {
        case "INCREASECOUNT":
            return  state + 1
            break;

            case "INCREASECOUNT5":
            return  state + 5
            break;

            case "DECREASECOUNT":
                return  state - 1
                break;

                case "DECREASECOUNT5":
                return  state - 5
                break;
    
        default:
            return state;
            break;
    }

}

export default changeCounter;

