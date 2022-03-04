import { counterReducer } from "./counter/counter.reducers";
import { CounterState } from "./counter/counter.state";
import { postsReducer } from "./posts/posts.reducers";
import { PostState } from "./posts/posts.state";

export interface AppState{
    counter : CounterState;
    posts : PostState;
}

export const appReducer = {
    counter : counterReducer,
    posts : postsReducer
}