import { Container } from './styles';

export function Textarea({ value, placeholder, ...rest }) {
  function handleChange(event) {
    rest.onChange(event.target.value);
  }

  return (
    <Container value={value} onChange={handleChange} placeholder={placeholder} />
  );
}