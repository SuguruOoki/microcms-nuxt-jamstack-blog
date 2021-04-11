const axios = require('axios');

exports.handler = async (event) => {
  console.log($config)
  const { id, draftKey } = event.queryStringParameters;
  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        error: 'Missing "id" query parameter',
      }),
    };
  }
  return axios
    .get(
      `${apiBaseUrl}/blog/${id}?draftKey=${draftKey}`,
      {
        headers: { 'X-API-KEY': xApiKey },
      }
    )
    .then(({ data }) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }))
    .catch((error) => {
      return {
        statusCode: error.response.status,
        body: JSON.stringify(error.response.data),
      }
    });
};
