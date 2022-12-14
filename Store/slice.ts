import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Props {
  walletIsConnected: boolean;
  walletAddress: "",
  reason: string;
  owner:string;
  charity: any;
  amount: number | undefined;
  donations: number,
  donators:any,
  currentRaised:number;
  form:any;
  imageLink: any;
  closed: boolean;
}

const initialState:Props = {
  walletIsConnected: false,
  walletAddress: "",  
  reason: '',
  owner: '',
  charity: null,
  amount: 0,
  donations: 0,
  donators: null,
  currentRaised: 0,
  form: {
    firstName: '',
    lastName: '',
    fundraiserName: '',
    reasonForFund: '',
  },
  //form: null,
  imageLink: null,
  closed: false
}

export const slice = createSlice ({
  name: 'slice',
  initialState,
  reducers: {
    // reset: (state, action) => {
    //  state = initialState
    // },
    reset : () => initialState,
    updateWalletStatus: (state, action: PayloadAction<boolean>) => {
      state.walletIsConnected = action.payload;
    },
    updateWalletAddress: (state, action: PayloadAction<any>) => {
      state.walletAddress = action.payload;
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

export const {reset,updateWalletStatus, updateReason, updateOwner, updateCharity, updateAmount, updateForm, updateImageLink, updateWalletAddress} = slice.actions;

export default slice.reducer;

//useAppSelector(state => state.root.pickup.disabled);
//dispatch(updatePickup(e.target.value));