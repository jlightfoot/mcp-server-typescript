import { BaseModule } from '../base.module';
import { DataForSEOClient } from '../../client/dataforseo.client';
import { YourTool } from './tools/ai-keyword.tool.js';

export class AiOptimizationApiModule extends BaseModule {
  constructor(private client: DataForSEOClient) {
    super(client);
  }

  getTools() {
    return {
      AiKeywordTool: new AiKeywordTool(this.client),
    };
  }
}
