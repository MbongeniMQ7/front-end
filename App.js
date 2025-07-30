import React, { useState } from 'react';
import AuthScreen from './screens/AuthScreen.jsx';
import BiometricPrompt from './screens/BiometricPrompt.jsx';

export default function App() {
  const [showBiometrics, setShowBiometrics] = useState(false);

  const handleAuthSuccess = () => {
    // After login/signup success, show biometrics screen
    setShowBiometrics(true);
  };

  const handleBiometricsDone = () => {
    // Navigate to home screen or do nothing for now
    alert('Biometric setup completed (UI only)');
  };

  return showBiometrics ? (
    <BiometricPrompt onDone={handleBiometricsDone} />
  ) : (
    <AuthScreen onSuccess={handleAuthSuccess} />
  );
}
