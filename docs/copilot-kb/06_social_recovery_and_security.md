# Social Recovery, Security Alerts, and Key Safety

## Social Recovery Architecture
In decentralized systems, losing access to a private key traditionally meant permanent loss of identity and assets. Bharosa prevents this through **Guardian-Based Social Recovery**:
1. **Configuring Guardians**:
   - A user selects 3 to 5 trusted guardians (other DIDs or trusted family/institution wallets).
   - A recovery threshold is set (e.g., 3 out of 5 required).
2. **Initiating Recovery**:
   - If a wallet is lost or compromised, the user reaches out to their guardians.
   - A recovery request is posted with the proposed replacement wallet address.
3. **Quorum Approval**:
   - Once the threshold of guardians signs approval transactions, the DID controller address updates on-chain to the new wallet.
   - The user regains complete control over their anchored credentials and encrypted assets.

---

## Security Engine & Automated Alerts
Bharosa runs an automated heuristic and rule-based Security Engine to protect users and the network. Detected anomalies include:
- `BURST_REQUESTS`: Abnormally high frequency of access requests in a short time frame, suggesting scraping or brute-force behavior.
- `VERIFICATION_FAILURE_SPIKE`: Rapid succession of failed verification checks against a target address, signaling potential credential forgery attempts.
- `UNBOUNDED_GRANT`: Grants created with indefinite or excessively prolonged access windows without purpose limitation.
- `OFF_HOURS_ACCESS`: Requests originating outside normal operational windows for enterprise assets.
- `RAPID_REVOCATION`: Multiple credentials revoked within minutes.
- `ACTIVE_RECOVERY_ATTEMPT`: An active social recovery has been initiated, alerting the legitimate owner to potential account takeover.

---

## Critical Key Safety Rules
- **NEVER share your private keys or seed phrases** (12 or 24 words) with anyone, including support, admins, or the Copilot.
- The Copilot will actively detect and **block** any prompt containing private keys or seed phrases to prevent accidental credential leakage.
