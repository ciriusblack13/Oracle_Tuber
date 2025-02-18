import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface APIKey {
  name: string;
  key: string;
  description: string;
}

export default function APIKeysSection() {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({
    openai: false,
    anthropic: false,
    deepseek: false,
    openrouter: false,
    youtube: false,
  });

  const apiKeys: APIKey[] = [
    {
      name: "OpenAI",
      key: "sk-...",
      description: "Used for content generation and analysis",
    },
    {
      name: "Anthropic",
      key: "sk-ant-...",
      description: "Used for advanced content understanding",
    },
    {
      name: "Deepseek",
      key: "sk-dp-...",
      description: "Used for specialized AI tasks",
    },
    {
      name: "OpenRouter",
      key: "sk-or-...",
      description: "Used for AI model routing",
    },
    {
      name: "YouTube",
      key: "AIza...",
      description: "Used for YouTube API integration",
    },
  ];

  const toggleKeyVisibility = (keyName: string) => {
    setShowKeys((prev) => ({
      ...prev,
      [keyName.toLowerCase()]: !prev[keyName.toLowerCase()],
    }));
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-6">API Keys</h2>
      <div className="space-y-6">
        {apiKeys.map((api) => (
          <div key={api.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">{api.name}</label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleKeyVisibility(api.name)}
              >
                {showKeys[api.name.toLowerCase()] ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            <Input
              type={showKeys[api.name.toLowerCase()] ? "text" : "password"}
              placeholder={`Enter your ${api.name} API key`}
              defaultValue={api.key}
            />
            <p className="text-sm text-muted-foreground">{api.description}</p>
          </div>
        ))}
        <Button className="w-full">Save Changes</Button>
      </div>
    </Card>
  );
}
