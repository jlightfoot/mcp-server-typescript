import { DataForSEOClient } from '../../client/dataforseo.client.ts';
import { BaseModule, ToolDefinition } from '../base.module.ts';
import { AIKeywordDataTool } from './tools/ai-keyword-data/ai-keyword-data.tool.ts';

export class AIOptimizationApi extends BaseModule {
  constructor(client: DataForSEOClient) {
    super(client);
  }

  getTools(): Record<string, ToolDefinition> {
    const tools = [
      new AIKeywordDataTool(this.dataForSEOClient),
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
