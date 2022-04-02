import { getDetails, addDetails } from './../Actions/details.action';
import { createReducer, on } from '@ngrx/store';
import { Details } from './../../models/Details';

export interface DetailsState{
    details: ReadonlyArray<Details>;
}

const initialState:  ReadonlyArray<Details> = [];

export const detailReducer = createReducer(
    initialState,
    on(getDetails, (state) => [...getDetailsList()]),
    on(addDetails, (state, detail) => [...state])
);

function getDetailsList(): Details[] {
    let DetailsList: Details[] = [
        { Name: "Test1", Comment: "Comment1"},
        { Name: "Test2", Comment: "Comment2"},
        { Name: "Test3", Comment: "Comment3"},
        { Name: "Test4", Comment: "Comment4"},
        { Name: "Test5", Comment: "Comment5"},
        { Name: "Test6", Comment: "Comment6"},
          ];
    return DetailsList;
}