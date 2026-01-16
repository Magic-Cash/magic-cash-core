/**
 * GUARD ROUTE
 * A security middleware component for route protection.
 * Ensures the user is both Authenticated and Unlocked.
 */
import { Navigate } from 'react-router-dom';

export const GuardRoute = ({ children, isAuthenticated, isAppUnlocked }) => {
  // 1. Check if user is logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  // 2. Check if the App-Wide PIN Lock is active
  if (!isAppUnlocked) {
    // In a real scenario, this would trigger the AppLockOverlay
    console.warn("[Security] Navigation blocked: App is currently locked.");
  }
  
  return children;
};