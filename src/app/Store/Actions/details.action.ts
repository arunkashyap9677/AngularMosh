import { Details } from './../../models/Details';
import { createAction, props } from "@ngrx/store";

export const getDetails = createAction('[Details] Get Details');
export const addDetails = createAction('[Details] Add Details', props<{detail: Details}>());
export const addDetailsSuccess = createAction('[Details] Add Details Success', props<{detail: Details}>());