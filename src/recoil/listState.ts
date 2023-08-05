import { atom, selector } from 'recoil';

const defaultDataAdmin = {
  statusChangeInfo: false,
  statusConfirm: false,
  adminRole: false
};

export const data = atom({
  key: 'defaultData',
  default: defaultDataAdmin
});

export const handleData = selector({
  key: 'handleData',
  get: ({ get }) => {
    const states = get(data);
    return states;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  set: ({ get, set }, action: any) => {
    const states = get(data);
    switch (action.type) {
      case 'SET_MODAL_CHANGE_INFO':
        set(data, {
          ...states,
          statusChangeInfo: action.payload
        });
        break;
      case 'SET_MODAL_CONFIRM':
        set(data, {
          ...states,
          statusConfirm: action.payload
        });
        break;
      case 'SET_ADMIN_ROLE':
        set(data, {
          ...states,
          adminRole: action.payload
        });
    }
  }
});
