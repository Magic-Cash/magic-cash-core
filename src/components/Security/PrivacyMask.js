/**
 * PRIVACY MASK
 * Prevents "Shoulder Surfing" by obscuring sensitive financial data.
 */
export const PrivacyMask = ({ value, isVisible, maskChar = "•" }) => {
  // Flexibility: If isVisible is false, return masked version of the string
  const maskedValue = value.replace(/./g, maskChar);
  
  return (
    <span className="font-mono tracking-widest">
      {isVisible ? value : maskedValue}
    </span>
  );
};