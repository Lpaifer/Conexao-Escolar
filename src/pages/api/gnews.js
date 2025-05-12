export async function GET() {
  const API_KEY = 'cd3f7f1802c0b2a827e88333fadbacfc'; // Substitua pela sua chave real
  const url = `https://gnews.io/api/v4/search?q=educacao&lang=pt&country=br&token=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const articles = Array.isArray(data.articles) ? data.articles : [];

    return new Response(JSON.stringify({ total: articles.length, articles }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao buscar notícias do GNews.' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
