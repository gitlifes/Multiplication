import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

interface CounterState {
  operationToggle: boolean
  firstNumber: number
  secondNumber: number
  result: string
  // correctAnswer: boolean
  // vrongAnswer: boolean
}
const initialState: CounterState = {
  operationToggle: true,
  firstNumber: 7,
  secondNumber: 8,
  result: '',
  // correctAnswer: false,
  // vrongAnswer: false
}

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setMultiplication: (state) => {
      state.operationToggle = true
    },

    setDevision: (state) => {
      state.operationToggle = false
    },

    setFirstNumber: (state, action) => {
      state.firstNumber = action.payload
    },

    setSecondNumber: (state, action) => {
      state.secondNumber = action.payload
    },

    setResult: (state, action) => {
      state.result = action.payload
    }
    // setFirstNumber: (state) => {
    //   state.firstNumber = 
    // }
  }
})

export const { setMultiplication, setDevision, setFirstNumber, setSecondNumber, setResult } = countSlice.actions

export const operationToggle = (state: RootState) => state.count.operationToggle

export default countSlice.reducer

