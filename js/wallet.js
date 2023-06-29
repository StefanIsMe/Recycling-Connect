// Select elements
const statusElement = document.getElementById('status');
const addressElement = document.getElementById('address');
const connectButton = document.getElementById('connectButton');
const disconnectButton = document.getElementById('disconnectButton');

// Connect the MetaMask wallet
function connectWallet() {
  // Request connection to the MetaMask wallet
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .then((accounts) => {
      const address = accounts[0];
      statusElement.textContent = 'Wallet connected';
      addressElement.textContent = `Address: ${address}`;

      // Add event listener for account changes
      ethereum.on('accountsChanged', handleAccountsChanged);

      // Show disconnectButton and hide connectButton
      disconnectButton.style.display = 'block';
      connectButton.style.display = 'none';
    })
    .catch((error) => {
      console.error(error);
      statusElement.textContent = 'Error connecting wallet';
    });
}

// Handle account changes
function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    // MetaMask wallet disconnected
    statusElement.textContent = 'Wallet disconnected';
    addressElement.textContent = '';

    // Hide disconnectButton and show connectButton
    disconnectButton.style.display = 'none';
    connectButton.style.display = 'block';
  } else {
    // Account changed, update address
    const address = accounts[0];
    addressElement.textContent = `Address: ${address}`;
  }
}

// Disconnect the MetaMask wallet
function disconnectWallet() {
  // Reset UI
  statusElement.textContent = 'Wallet not connected';
  addressElement.textContent = '';

  // Remove event listener
  ethereum.removeListener('accountsChanged', handleAccountsChanged);

  // Clear accounts to disconnect from MetaMask wallet
  ethereum
    .request({ method: 'eth_requestAccounts' })
    .catch((error) => {
      console.error(error);
      statusElement.textContent = 'Error disconnecting wallet';
    });

  // Hide disconnectButton and show connectButton
  disconnectButton.style.display = 'none';
  connectButton.style.display = 'block';
}

// Add event listeners to buttons
connectButton.addEventListener('click', connectWallet);
disconnectButton.addEventListener('click', disconnectWallet);