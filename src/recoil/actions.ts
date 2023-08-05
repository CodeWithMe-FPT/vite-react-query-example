export const setModalChangeInfo = (state: boolean) => {
  return {
    type: 'SET_MODAL_CHANGE_INFO',
    payload: state
  };
};

export const setModalConfirm = (state: boolean) => {
  return {
    type: 'SET_MODAL_CONFIRM',
    payload: state
  };
};

export const setAdminRole = (state: boolean) => {
  return {
    type: 'SET_ADMIN_ROLE',
    payload: state
  };
};
