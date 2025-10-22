import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FC } from "react"
import { Button } from "../ui/button"

interface APIStepProps {
  azureOpenaiAPIKey: string
  azureOpenaiEndpoint: string
  azureOpenai35TurboID: string
  azureOpenai45TurboID: string
  azureOpenai45VisionID: string
  azureOpenaiEmbeddingsID: string
  useAzureOpenai: boolean
  onAzureOpenaiAPIKeyChange: (value: string) => void
  onAzureOpenaiEndpointChange: (value: string) => void
  onAzureOpenai35TurboIDChange: (value: string) => void
  onAzureOpenai45TurboIDChange: (value: string) => void
  onAzureOpenai45VisionIDChange: (value: string) => void
  onAzureOpenaiEmbeddingsIDChange: (value: string) => void
  onUseAzureOpenaiChange: (value: boolean) => void
}

export const APIStep: FC<APIStepProps> = ({
  azureOpenaiAPIKey,
  azureOpenaiEndpoint,
  azureOpenai35TurboID,
  azureOpenai45TurboID,
  azureOpenai45VisionID,
  azureOpenaiEmbeddingsID,
  useAzureOpenai,
  onAzureOpenaiAPIKeyChange,
  onAzureOpenaiEndpointChange,
  onAzureOpenai35TurboIDChange,
  onAzureOpenai45TurboIDChange,
  onAzureOpenai45VisionIDChange,
  onAzureOpenaiEmbeddingsIDChange,
  onUseAzureOpenaiChange
}) => {
  return (
    <>
      <div className="mt-5 space-y-2">
        <Label className="flex items-center">
          <div>Azure OpenAI API Key</div>

          <Button
            className="ml-3 h-[18px] w-[150px] text-[11px]"
            onClick={() => onUseAzureOpenaiChange(!useAzureOpenai)}
          >
            {useAzureOpenai
              ? "Switch To Standard OpenAI"
              : "Switch To Azure OpenAI"}
          </Button>
        </Label>

        <Input
          placeholder="Azure OpenAI API Key"
          type="password"
          value={azureOpenaiAPIKey}
          onChange={e => onAzureOpenaiAPIKeyChange(e.target.value)}
        />
      </div>

      <div className="ml-8 space-y-3">
        <div className="space-y-1">
          <Label>Azure OpenAI Endpoint</Label>

          <Input
            placeholder="https://your-endpoint.openai.azure.com"
            type="password"
            value={azureOpenaiEndpoint}
            onChange={e => onAzureOpenaiEndpointChange(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <Label>Azure OpenAI GPT-3.5 Turbo ID</Label>

          <Input
            placeholder="Azure OpenAI GPT-3.5 Turbo ID"
            type="password"
            value={azureOpenai35TurboID}
            onChange={e => onAzureOpenai35TurboIDChange(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <Label>Azure OpenAI GPT-4.5 Turbo ID</Label>

          <Input
            placeholder="Azure OpenAI GPT-4.5 Turbo ID"
            type="password"
            value={azureOpenai45TurboID}
            onChange={e => onAzureOpenai45TurboIDChange(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <Label>Azure OpenAI GPT-4.5 Vision ID</Label>

          <Input
            placeholder="Azure OpenAI GPT-4.5 Vision ID"
            type="password"
            value={azureOpenai45VisionID}
            onChange={e => onAzureOpenai45VisionIDChange(e.target.value)}
          />
        </div>

        <div className="space-y-1">
          <Label>Azure OpenAI Embeddings ID</Label>

          <Input
            placeholder="Azure OpenAI Embeddings ID"
            type="password"
            value={azureOpenaiEmbeddingsID}
            onChange={e => onAzureOpenaiEmbeddingsIDChange(e.target.value)}
          />
        </div>
      </div>
    </>
  )
}
