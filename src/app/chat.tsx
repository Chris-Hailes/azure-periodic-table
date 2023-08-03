// api/chat.tsx

async function getChatCompletion(question: string) {
  const requestBody = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful Azure cloud assistant who is an expert on cloud services.',
      },
      {
        role: 'user',
        content: question,
      },
    ],
  };

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }

    const jsonResponse = await response.json();
    return jsonResponse.choices[0].message.content;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

export { getChatCompletion };
