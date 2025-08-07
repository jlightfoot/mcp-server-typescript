import { BaseModule } from '../base.module';
import { DataForSEOClient } from '../../client/dataforseo.client';
import { AiKeywordTool } from './tools/ai-keyword.tool.ts';

export class AiOptimizationApiModule extends BaseModule {
  constructor(private client: DataForSEOClient) {
    super();
  }

  getTools() {
    return {
      'AiKeywordTool': new AiKeywordTool(this.client),
    };
  }
}
