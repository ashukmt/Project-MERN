import {configureStore} from "@reduxjs/toolkit"
import { courseReducer } from "./courseReducer/courseReducer"

export const store = configureStore({reducer: {
    course: courseReducer
}})