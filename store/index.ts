import { atom } from 'recoil'

export const sideNavIs = atom({
  key: 'side-nav', // unique ID (with respect to other atoms/selectors)
  default: true, // default value (aka initial value)
});

export const notification = atom({
  key: 'notification-hide', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});