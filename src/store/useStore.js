import { create } from 'zustand';

const useStore = create((set) => ({
  form: {
    name: '',
    email: '',
    message: '',
    phone: ''
  },
  submittedData: null,
  updateForm: (name, value) =>
    set((state) => ({
      form: { ...state.form, [name]: value },
    })),
  submitForm: () =>
    set((state) => ({ submittedData: state.form })),
}));

export default useStore;
