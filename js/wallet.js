// Select DOM elements
const statusElement = document.getElementById('status');
const addressElement = document.getElementById('address');
const connectButton = document.getElementById('connectButton');
const disconnectButton = document.getElementById('disconnectButton');

// Check if MetaMask is installed
if (typeof ethereum === 'undefined') {
  statusElement.textContent = 'MetaMask not detected';
} else {
  // Add event listener to connectButton
  connectButton.addEventListener('click', connectWallet);

  // Add event listener to disconnectButton
  disconnectButton.addEventListener('click', disconnectWallet);
}

// Connect the MetaMask wallet
function connectWallet() {
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(handleAccountsChanged)
    .catch((error) => {
      console.error(error);
      statusElement.textContent = 'Error connecting to wallet';
    });
}

// Disconnect the MetaMask wallet
function disconnectWallet() {
  // Reset UI
  statusElement.textContent = 'Wallet not connected';
  addressElement.textContent = '';

  // Remove event listener
  ethereum.removeListener('accountsChanged', handleAccountsChanged);

  // Disconnect from MetaMask wallet
  ethereum.disconnect();

  // Hide disconnectButton and show connectButton
  disconnectButton.style.display = 'none';
  connectButton.style.display = 'block';
}

// Handle accountsChanged event
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask is locked or no accounts are available
    statusElement.textContent = 'Wallet not connected';
    addressElement.textContent = '';
  } else {
    // MetaMask is connected and accounts are available
    const address = accounts[0];
    statusElement.textContent = 'Wallet connected';
    addressElement.textContent = `Connected address: ${address}`;
  }
}