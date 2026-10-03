# Frequently Asked Questions (FAQ) & Troubleshooting

## Frequently Asked Questions

### Q1: Can Bharosa Copilot sign transactions or transfer assets for me?
**No.** Bharosa Copilot operates under a strict Zero-Authority security model. It cannot sign transactions, cannot execute contract calls, and has no access to your wallet or private keys. Any action suggested by the Copilot is presented as an Action Card that pre-populates the UI form for your review; you must personally approve and sign in your Web3 wallet.

### Q2: Can the Copilot see my uploaded documents or private files?
**No.** All sensitive files uploaded to Bharosa are encrypted locally on your device prior to reaching IPFS. The Copilot cannot read ciphertext, has no decryption keys, and only references public metadata (such as asset titles or check results).

### Q3: Which languages does the Copilot support?
Bharosa Copilot natively understands and responds in **English**, **Hindi (हिंदी)**, and **Tamil (தமிழ்)** based on your input language.

---

## Troubleshooting Common Errors

### 1. "User rejected transaction" (Error 4001)
- **Cause**: You clicked "Cancel" or "Reject" in your wallet extension prompt.
- **Solution**: Re-open the action and click "Confirm" when MetaMask/your wallet prompts for signature.

### 2. "Transaction underpriced" or "Gas estimation failed"
- **Cause**: Network congestion or attempting to call a contract method with invalid parameters (e.g., trying to revoke a grant you do not own).
- **Solution**: Increase priority gas fee slightly, or verify that your connected wallet is the designated controller or owner.

### 3. "IPFS Gateway Timeout"
- **Cause**: Decentralized IPFS pinning service is synchronizing blocks across nodes.
- **Solution**: Refresh the asset view or retry retrieving after 15–30 seconds.

### 4. "DID already registered"
- **Cause**: Your connected wallet address already controls a registered DID on-chain.
- **Solution**: You do not need to register again; navigate directly to your DID profile to view your identifier.
