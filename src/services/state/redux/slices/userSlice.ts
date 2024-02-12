import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Modify the state type and arg types to match your needs
interface userState {
  userId: string;
  userEmail: string;
  userPassword: string;
  userFirstName: string;
  userLastName: string;
  userGender: string;
  userProfile: string;
  userUsername: string;
  userRefNo: string;
  userRole: string;
  isFirstLogin: boolean;
  isLoadingFetching: boolean;
  userCreatedDate: string;
}

const initialState: userState = {
  userId: '',
  userEmail: '',
  userPassword: '',
  userFirstName: '',
  userLastName: '',
  userGender: '',
  userProfile: '',
  userUsername: '',
  userRefNo: '',
  userRole: '',
  isFirstLogin: true,
  isLoadingFetching: false,
  userCreatedDate: '',
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    UserInfoRedux: (state: userState, action: PayloadAction<Partial<userState>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    logoutUserRedux: () => {
      return initialState;
    },
  },
});

export const { UserInfoRedux, logoutUserRedux } = userSlice.actions;

export default userSlice.reducer;
