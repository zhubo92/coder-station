import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getTypeApi} from "../api/type";
import {message} from "antd";

export const getTypeList =
    createAsyncThunk(
        "type/getTypeList",
        async (_, thunkAPI) => {
            const {data, code, msg} = await getTypeApi();
            if (code === 0) {
                return data;
            } else {
                message.warning(msg);
            }
        }
    )

const typeSlice = createSlice({
    name: 'type',
    initialState: {
        typeList: [] // 存储所有的类型
    },
    reducers: {},
    // 专门处理异步结果的
    extraReducers(builder) {
        builder
            .addCase(getTypeList.fulfilled, (state, {payload}) => {
                state.typeList = payload;
            })
    }
});

export default typeSlice.reducer;