import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const loggedInState = atom<boolean>({
  key: 'isLoggedIn',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const firstNameState = atom<string>({
  key: 'firstName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const signUpModalState = atom<boolean>({
  key: 'isSignUpModalOpen',
  default: false,
});

export const completeModalState = atom<boolean>({
  key: 'isCompleteModalOpen',
  default: false,
});

export const profileSettingModalState = atom<boolean>({
  key: 'isProfileSettingModalOpen',
  default: false,
});
