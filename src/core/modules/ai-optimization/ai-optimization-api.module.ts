import { DataForSEOClient } from '../../client/dataforseo.client.js';
import { BaseModule, ToolDefinition } from '../base.module.js';
import { AIKeywordsSearchVolumeTool } from './tools/ai-keyword-data/ai-keywords-search-volume.tool.js';

export class AIOptimizationApi extends BaseModule {
  constructor(client: DataForSEOClient) {
    super(client);
  }

  getTools(): Record<string, ToolDefinition> {
    const tools = [
      new AIKeywordsSearchVolumeTool(this.dataForSEOClient),
      // Add more tools here
    ];

    return tools.reduce((acc, tool) => ({
      ...acc,
      [tool.getName()]: {
        description: tool.getDescription(),
        params: tool.getParams(),
        handler: (params: any) => tool.handle(params),
      },
    }), {});
  }
}
