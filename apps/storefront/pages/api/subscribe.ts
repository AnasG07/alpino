import qs from 'querystring';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 404;
    res.send("Area 51! Doesn't exist");
    return;
  }
  const { email } = req.body;
  await addToNetcore(email);
  res.statusCode = 200;
  res.json({ success: true });
};

async function addToNetcore(email) {
  const body = qs.stringify({
    apikey: '5442000b704ee16af6235936bf3e0275',
    type: 'contact',
    activity: 'add',
    data: `{"EMAIL": "${email}"}`,
    listid: '3',
  });
  const result = await fetch('http://api.netcoresmartech.com/apiv2', { method: 'POST', body });

  return result.statusText.toLowerCase() === 'ok';
}
