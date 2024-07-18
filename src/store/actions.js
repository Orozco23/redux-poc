export const UPDATE_FORM = 'UPDATE_FORM';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const updateForm = (name, value) => ({
  type: UPDATE_FORM,
  payload: { name, value },
});

export const submitForm = (formData) => ({
  type: SUBMIT_FORM,
  payload: formData,
});
