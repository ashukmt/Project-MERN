import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { courseReducer } from "./courseReducer/courseReducer"
import { rewardReducer } from "./RewardReducer/rewardreducer"

export const store = configureStore({
    reducer: {
        course: courseReducer,
        Reward: rewardReducer
    },
    middleware: [thunk]
})
