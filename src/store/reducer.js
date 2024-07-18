import { UPDATE_FORM, SUBMIT_FORM } from './actions';

const initialState = {
  form: {
    name: '',
    email: '',
    message: '',
    phone: ''
  },
  submittedData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.name]: action.payload.value,
        },
      };
    case SUBMIT_FORM:
      return {
        ...state,
        submittedData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
