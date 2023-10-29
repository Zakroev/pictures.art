const postData: (
  url: string,
  data: { [key: string]: string }
) => Promise<string> = async (url: string, data: { [key: string]: string }) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return await res.text();
};

const getResource: (url: string) => Promise<string> = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};

export { postData, getResource };
