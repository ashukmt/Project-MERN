import {
    configureStore
} from "@reduxjs/toolkit"
import {
    courseReducer
} from "./courseReducer/courseReducer"
import thunk from "redux-thunk"

export const store = configureStore({
    reducer: {
        course: courseReducer
    },
    middleware: [thunk]
})