import { configureStore } from "@reduxjs/toolkit";
import uploadFilesReducers from './uploadFiles';
// import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        uploadFiles: uploadFilesReducers,
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false})
    }
})