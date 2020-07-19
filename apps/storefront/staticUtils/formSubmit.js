export default async function submit(data, subject) {
  return fetch('/api/forms', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data, subject }),
  });
}
