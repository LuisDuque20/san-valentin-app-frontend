export const sendConfirmation = async (email) => {
  const res = await fetch('http://localhost:3000/api/mail/send-confirmation', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });

  if (!res.ok) {
    throw new Error('Error enviando correo');
  }
};
