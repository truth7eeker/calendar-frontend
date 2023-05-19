import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = process.env.REACT_APP_BASE_URL as RequestInfo;

interface IParams {
    year: number,
    month: number
}

export const fetchDates = createAsyncThunk('dates/fetchDates', async(params:IParams) => {
    const response = await fetch(`${BASE_URL}?month=${params.month}&year=${params.year}`)
    const data = await response.json()
    return data
})
