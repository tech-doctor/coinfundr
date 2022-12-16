
declare global {
  interface Window {
    ethereum: any
  }
}

export const connectWallet = async () => {
    if(window.ethereum) {
      try{
        const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
        });
        console.log(addressArray)
        const obj = {
          status: 200,
          address: addressArray[0],
        };
        console.log(obj)
        return obj;
      } 
      catch (err:any) {
        return {
          address: "",
          status: 400,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {""}
              🦊{" "}
              <a 
              rel='noreferrer'
              target= "_blank" href = {`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your browser.
              </a>
            </p>
          </span>
        )
      }
    }
  }


  export const getCurrentwalletConnected = async () => {
    if(window.ethereum) {
      try{
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        //console.log(addressArray)
        if(addressArray.length > 0) {
          return{
            address: addressArray[0],
            status: 200,
            statusMessage: "success"
          };
        } else {
          return {
            address: "",
            status: 400,
            statusMessage: "🦊 Connect to Metamask using the top right button."
          };
        }
      } catch (err:any) {
        return {
          address: "",
          status: 400,
          statusMessage: "Something went wrong, please try again!",
        };
      }
    }else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank"
              rel='noreferrer'
               href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
  }