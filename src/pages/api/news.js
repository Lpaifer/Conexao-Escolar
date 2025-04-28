// src/pages/api/news.js

export async function GET() {
    const API_KEY = 'cb0db01ab7de4c33936906c7bd24fcf7'; // Substitua pela sua chave real se quiser manter segura
    const url = `https://newsapi.org/v2/everything?q=educacao&language=pt&apiKey=${API_KEY}`;

  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Erro ao buscar notícias.' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  }
  