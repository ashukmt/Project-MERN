import {configureStore} from "@reduxjs/toolkit"
import { courseReducer } from "./courseReducer/courseReducer"
import { rewardReducer } from "./RewardReducer/rewardreducer"

export const store = configureStore({reducer: {
    course: courseReducer,
    Rewards:rewardReducer
}})