/**
 * MAGIC CASH - UI/UX DESIGN SYSTEM & ARCHITECTURE
 * This file documents the design principles and user experience patterns 
 * implemented across the Magic Cash Neobank ecosystem.
 */

export const DesignSystem = {
  theme: {
    mode: "Dark First", // Prioritizing eye comfort for financial monitoring
    primaryColor: "#FFD700", // "Magic Gold" for primary actions and branding
    surfaceColor: "#0F172A", // Deep Slate for card backgrounds and depth
    statusColors: {
      success: "#10B981", // Emerald for positive market moves
      danger: "#EF4444", // Rose for liquidations or security alerts
      warning: "#F59E0B" // Amber for pending transactions
    }
  },
  
  uxPatterns: {
    security: {
      entry: "Immediate PIN-Lock challenge before mounting Dashboard context",
      privacy: "Masking sensitive VCC numbers with a 'Hide Secrets' toggle",
      validation: "Haptic feedback on incorrect PIN entry attempts"
    },
    navigation: {
      style: "Glassmorphism Bottom Navigation for one-handed mobile use",
      activeState: "Gold glow indicator on selected feature tabs",
      transitions: "Slide-up modals for 'Swap' and 'Buy' actions to maintain context"
    },
    dataVisualization: {
      balance: "High-contrast Typography for SOL/USDC balances",
      staking: "Visual progress bars for budgeting limits ($45 / $500)",
      market: "Real-time ticker pulses indicating live CMC API updates"
    }
  }
};

/**
 * UX PHILOSOPHY: THE "NEOBANK" EXPERIENCE
 * 1. Frictionless Onboarding: Fast registration with secondary profile setup.
 * 2. Visual Trust: Using high-quality Visa branding for VCC to build legitimacy.
 * 3. Accessibility: Large touch targets for Send/Request/Buy/Swap buttons.
 */
export const DesignNotes = () => {
  return "Documenting the fusion of Web3 security with TradFi usability.";
};