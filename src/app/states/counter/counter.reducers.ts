import { createReducer, on } from "@ngrx/store"
import { add, changeChannelName, decrement, increment, reset } from "./counter.actions"
import { initialState } from "./counter.state"
export const _counterReducer = createReducer(initialState,
        on(increment, (state) => {
            return{
                ...state, 
                counter : state.counter + 1
            }
        }),
        on(decrement, (state) => {
            return {
                ...state,
                counter : state.counter - 1
            }
        }),
        on(reset, (state) => {
            return {
                ...state, 
                counter: 0
            }
        }),
        on(add, (state, action) => {
            return {
                ...state,
                counter : state.counter + action.value
            }
        }),
        on(changeChannelName, state => {
            return {
                ...state,
                channelName : 'Modificado'
            }
        })
    )

export function counterReducer(state : any, action : any){
    return _counterReducer(state, action)
}