if (typeof window.ethereum !== "undefined") {
    console.log('MetaMask is installed!');
 }
else{
      console.log('MetaMask not installed!');

      const ethereumButton = document.querySelector('.enableEthereumButton');

      ethereumButton.addEventListener('click', () => {
        //Will Start the metamask extension
        console.log('fuck yeah')
        ethereum.request({ method: 'eth_requestAccounts' });
      });
      const onClickConnect = async () => {
        try {
          // Will open the MetaMask UI
          // You should disable this button while the request is pending!
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
        } catch (error) {
          console.error(error);
        }
        console.log(accounts[0]);
      };
}
//


const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
const account = accounts[0];
ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
          value: '0x29a2241af62c0000',
          gasPrice: '0x09184e72a000',
          gas: '0x2710',
        },
      ],
    });
