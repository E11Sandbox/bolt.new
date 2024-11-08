import { createAnthropic } from '@ai-sdk/anthropic'
import { createOllama } from 'ollama-ai-provider'
import { createOpenAI } from '@ai-sdk/openai'

export function getAnthropicModel(apiKey: string) {
  const anthropic = createAnthropic({
    apiKey,
  })

  return anthropic('claude-3-5-sonnet-20240620')
}

export function getModel() {
  // const ollama = createOllama({
  //   baseURL: 'http://localhost:11434/api',
  // });

  // return ollama('deepseek-coder-v2');

  const openai = createOpenAI({
    // custom settings, e.g.
    compatibility: 'strict', // strict mode, enable when using the OpenAI API
    apiKey: process.env.OPEN_AI_KEY,
  })

  return openai('gpt-4o')
}
