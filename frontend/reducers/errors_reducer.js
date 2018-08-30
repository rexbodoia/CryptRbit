import { combineReducers } from 'redux';
import exchangeErrorsReducer from './exchange_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
    exchange_errors: exchangeErrorsReducer,
    session_errors: sessionErrorsReducer,
});

export default errorsReducer;