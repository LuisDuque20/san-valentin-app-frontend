import { useState } from 'react';
import { sendConfirmation } from '../services/api';

export default function EmailForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendConfirmation(email);
      onSuccess();
    } catch {
      alert('Error al enviar el correo 😢');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h1>💌 Último paso</h1>
      <p>Escribe tu correo para confirmar nuestra cita 🌹</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="tu_correo@gmail.com"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="yes" type="submit">
          {loading ? 'Enviando...' : 'Confirmar 💖'}
        </button>
      </form>
    </div>
  );
}
