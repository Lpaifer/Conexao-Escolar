export async function GET() {
  const API_KEY = 'a8db51d90afe339c1dc0497890829c81';
  const url = `http://api.mediastack.com/v1/news?access_key=${API_KEY}&keywords=educacao&languages=pt`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const articles = Array.isArray(data.data) ? data.data : [];

    return new Response(JSON.stringify({ total: articles.length, articles }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Erro ao buscar no Mediastack:", error);
    return new Response(JSON.stringify({ error: 'Erro ao buscar notícias do Mediastack.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
