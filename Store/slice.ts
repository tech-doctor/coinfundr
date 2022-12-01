import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Props {
  walletIsConnected: boolean;
}

const initialState:Props = {
  walletIsConnected: false,  
}

export const slice = createSlice ({
  name: 'slice',
  initialState,
  reducers: {
    updateWalletStatus: (state, action: PayloadAction<boolean>) => {
      state.walletIsConnected = action.payload;
    },
  }
})

export const {updateWalletStatus} = slice.actions;

export default slice.reducer;

//useAppSelector(state => state.root.pickup.disabled);
//dispatch(updatePickup(e.target.value));