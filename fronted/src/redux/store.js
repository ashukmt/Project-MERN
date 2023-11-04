import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { courseReducer } from "./courseReducer/courseReducer"
import { rewardReducer } from "./RewardReducer/rewardreducer"
import { eventReducer } from "./eventReducer/eventReducer"
import { userReducer } from "./userReducer/actionReducer"

export const store = configureStore({
    reducer: {
        course: courseReducer,
        Reward: rewardReducer,
        events: eventReducer,
        user : userReducer
       
    },
    middleware: [thunk]
})
