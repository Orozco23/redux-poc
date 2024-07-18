import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: {
    name: '',
    email: '',
    message: '',
    phone: '',
    reciver: ''
  },
  submittedData: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      const { name, value } = action.payload;
      state.form[name] = value;
    },
    submitForm: (state) => {
      state.submittedData = state.form;
    }
  }
});

export const { updateForm, submitForm } = formSlice.actions;

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  }
});

export default store;
