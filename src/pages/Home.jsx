import { useState } from 'react';
import ValentineCard from '../components/ValentineCard';
import EmailForm from '../components/EmailForm';
import SuccessMessage from '../components/SuccessMessage';
import FlowerAnimation from '../components/FlowerAnimation';

export default function Home() {
  const [step, setStep] = useState('card');

  return (
    <>
      <FlowerAnimation />

      {step === 'card' && <ValentineCard onYes={() => setStep('email')} />}
      {step === 'email' && <EmailForm onSuccess={() => setStep('success')} />}
      {step === 'success' && <SuccessMessage />}
    </>
  );
}
