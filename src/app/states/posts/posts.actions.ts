import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const add = createAction('[posts page] add post', props<{post : Post}>());