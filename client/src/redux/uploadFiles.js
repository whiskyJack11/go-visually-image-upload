import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filesToUpload : []
}

export const uploadFilesSlice = createSlice({
    name: "uploadFiles",
    initialState,
    reducers: {
        addFile: (state, action) => {
            console.log(action)
            console.log(action.payload)
            console.log(typeof action.payload)
            console.log(typeof action.payload)
            const files = action.payload;
            console.log(files);
            files.map((file, index) => {
                
                state.filesToUpload.push(file[index])});
            // state.filesToUpload = action.payload
        }
    }
})

export const { addFile } = uploadFilesSlice.actions;
export default uploadFilesSlice.reducer