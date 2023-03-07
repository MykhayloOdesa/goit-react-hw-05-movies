import { useNavigate, useLocation } from 'react-router-dom';

export default function GoBackButton({ text }) {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from ?? '/';

  const goBack = () => navigate(from);

  return (
    <button onClick={goBack}>
      <span>{text}</span>
    </button>
  );
}
