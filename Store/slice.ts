import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Props {
  walletIsConnected: boolean;
  reason: string;
  owner:string;
  charity: any;
  amount: number | undefined;
  donations: number,
  currentRaised:number;
  form:any;
  imageLink: any;
}

const initialState:Props = {
  walletIsConnected: false,  
  reason: '',
  owner: '',
  charity: null,
  amount: 0,
  donations: 0,
  currentRaised: 0,
  form: {
    firstName: '',
    lastName: '',
    fundraiserName: '',
    reasonForFund: '',
  },
  imageLink: null,
}

export const slice = createSlice ({
  name: 'slice',
  initialState,
  reducers: {
    updateWalletStatus: (state, action: PayloadAction<boolean>) => {
      state.walletIsConnected = action.payload;
    },
    updateReason: (state, action: PayloadAction<string>) => {
      state.reason = action.payload;
    },
    updateOwner: (state, action: PayloadAction<string>) => {
      state.owner = action.payload;
    },
    updateCharity: (state, action: PayloadAction<any>) => {
      state.charity = action.payload;
    },
    updateAmount: (state, action: PayloadAction<number | undefined>) => {
      state.amount = action.payload;
    },
    updateForm: (state, action: PayloadAction<any>) => {
      state.form = action.payload;
    },
    updateImageLink: (state, action: PayloadAction<any>) => {
      state.imageLink = action.payload;
    }
    // updateReason: (state, action: PayloadAction<string>) => {
    //   state.reason = action.payload;
    // },
    // updateReason: (state, action: PayloadAction<string>) => {
    //   state.reason = action.payload;
    // },
  }
})

export const {updateWalletStatus, updateReason, updateOwner, updateCharity, updateAmount, updateForm, updateImageLink} = slice.actions;

export default slice.reducer;

//useAppSelector(state => state.root.pickup.disabled);
//dispatch(updatePickup(e.target.value));