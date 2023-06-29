document.addEventListener("DOMContentLoaded", () => {
    const connectButton = document.getElementById("connectButton");
    const disconnectButton = document.getElementById("disconnectButton");
    const statusText = document.getElementById("status");
    const addressText = document.getElementById("address");
  
    // Check if MetaMask is installed
    if (typeof window.ethereum === "undefined") {
      statusText.textContent = "MetaMask not detected";
      connectButton.disabled = true;
      return;
    }
  
    // Connect MetaMask Wallet
    connectButton.addEventListener("click", async () => {
      try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        const address = accounts[0];
        statusText.textContent = "Wallet connected";
        addressText.textContent = `Address: ${address}`;
        connectButton.style.display = "none";
        disconnectButton.style.display = "block";
      } catch (error) {
        console.error("Error connecting wallet:", error);
        statusText.textContent = "Failed to connect wallet";
      }
    });
  
    // Disconnect MetaMask Wallet
    disconnectButton.addEventListener("click", () => {
      ethereum
        .request({ method: "wallet_requestPermissions", params: [{ eth_accounts: {} }] })
        .then(() => {
          statusText.textContent = "Wallet disconnected";
          addressText.textContent = "";
          disconnectButton.style.display = "none";
          connectButton.style.display = "block";
        })
        .catch((error) => {
          console.error("Error disconnecting wallet:", error);
          statusText.textContent = "Failed to disconnect wallet";
        });
    });
  });  