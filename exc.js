const ethers = require('ethers');

async function sendTransaction(signedTransaction) {
  try {
    const provider = new ethers.providers.JsonRpcProvider('https://your-rpc-server.com');
    const transactionResponse = await provider.sendTransaction(signedTransaction);
    console.log(transactionResponse);
  } catch (error) {
    console.error('Error sending transaction:', error);
  }
}

// Example usage:
// sendTransaction('your-signed-transaction-here');
