# magic-cash-core
**Enterprise Web3 Neobank Infrastructure**

Magic Cash Core is a high-performance, non-custodial financial engine that bridges Traditional Banking with the Solana Web3 ecosystem. This repository is intentionally **framework-agnostic**, containing only reusable business rules shared across the Magic Cash ecosystem.

---

## Project Structure

This project follows a modular functional architecture to ensure separation of concerns:

* **database/** : Contains `security-layer.sql` for PostgreSQL Row Level Security (RLS) policies.
* **src/components/Security/** : Functional UI logic for `GuardRoute`, `PinPad`, and `PrivacyMask`.
* **src/constants/** : Core documentation for `UiUxGuidelines` and design tokens.
* **src/core/** : Proprietary engines for `auth`, `security` (PIN validation), and `session` management.
* **src/hooks/** : Specialized state logic for `useProfile` and `useStaking` .
* **src/services/** : Infrastructure bridges including `card-issuer` (VCC), `market` (API), `moonpay`, and `tracker` (Raydium).

---

## Security Architecture

### **Proprietary Auth & PIN-Lock**
Magic Cash utilizes a custom authentication engine and a global security challenge. Access to sensitive wallet data or virtual cards is protected by a mandatory **6-digit PIN** challenge, providing a secondary layer of defense even after successful login.

### **Hardened Database Layer**
The `security-layer.sql` establishes a **Zero-Trust** model using **PostgreSQL Row Level Security (RLS)**. This ensures absolute data isolation, where user records are protected at the database level and cannot be accessed by unauthorized entities.

---

## Core Modules

### **auth**
* Custom signup and signin flows with extended profiling.
* Mandatory PIN-Lock verification logic for app entry and sensitive actions.
* Secure session management with inactivity timeout rules.

### **wallet**
* Solana wallet identity management and real-time balance tracking.
* Liquid staking logic for SOL with automated reward distribution.
* Watchlist management for monitoring Raydium meme tokens.

### **payments**
* Secure transaction intent generation and payment request flows.
* Fiat-to-crypto conversion rules and integration logic for MoonPay.
* Real-time market data tracking.

### **cards**
* Virtual card lifecycle management: creation, freezing, and security rules.
* "Pay-per-card" issuance logic with strictly enforced spending limits.
* Framework-ready for enterprise-grade VCC issuers (Stripe/Striga).

---

## Installation

```bash
npm install
