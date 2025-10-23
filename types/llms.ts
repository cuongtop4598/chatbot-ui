import { ModelProvider } from "."

export type LLMID = "ollama"

export type OllamaLLMID = "ollama"

export interface OpenRouterLLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  maxContext?: number
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}
