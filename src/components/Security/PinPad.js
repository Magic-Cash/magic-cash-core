/**
 * PIN PAD COMPONENT
 * A reusable numeric keypad for security challenges.
 */
export const PinPad = ({ onNumberEntry, onDelete, onBiometric }) => {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      {digits.map((num) => (
        <button 
          key={num} 
          onClick={() => onNumberEntry(num)}
          className="bg-slate-800 text-white text-2xl p-6 rounded-2xl active:bg-slate-700 transition"
        >
          {num}
        </button>
      ))}
      {/* Biometric Icon Button (Fingerprint) */}
      <button onClick={onBiometric} className="p-6 text-yellow-500">
        <FingerprintIcon />
      </button>
      <button onClick={() => onNumberEntry(0)} className="bg-slate-800 text-white text-2xl p-6 rounded-2xl">
        0
      </button>
      {/* Delete/Backspace Button */}
      <button onClick={onDelete} className="p-6 text-red-500">
        <BackspaceIcon />
      </button>
    </div>
  );
};