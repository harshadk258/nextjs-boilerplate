import { global } from './global/global.reducer';
import { page } from './page/page.reducer';
import { todo } from './todo/todo.reducer';

import { combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
    global,
    page,
    todo,
});
