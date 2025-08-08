import { z } from 'zod';
import { DataForSEOClient } from '../../../../client/dataforseo.client.js';
import { BaseTool } from '../../../base.tool.js';

export class AIKeywordsSearchVolumeTool extends BaseTool {
  constructor(private client: DataForSEOClient) {
    super(client);
  }

  getName(): string {
    return 'ai_optimization_ai_keyword_search_volume';
  }

  getDescription(): string {
    return `This endpoint provides search volume data for your target keywords, reflecting their estimated usage in AI tools.

For each specified keyword, you will get AI search volume rate for the last month and AI search volume trend for the previous 12 months. 
The AI search volume values are calculated using statistical data from questions in the ‘People Also Ask’ SERP element.
`;
  }

  getParams(): z.ZodRawShape {
    return {
      keywords: z.array(z.string()).describe(`target keywords
required field
UTF-8 encoding
maximum number of keywords you can specify in this array: 1000`),
      location_name: z.string().default("United States").describe(`full name of the location
required field
in format "Country"
example:
United Kingdom`),
      language_code: z.string().default("en").describe(
        `language code
        required field
        example:
        en`),
    };
  }

  async handle(params: any): Promise<any> {
    try {
      const response = await this.client.makeRequest('/v3/ai_optimization/ai_keyword_data/keywords_search_volume/live', 'POST', [{
        keywords: params.keywords,
        location_name: params.location_name,
        language_code: params.language_code,
      }]);
      return this.validateAndFormatResponse(response);
    } catch (error) {
      return this.formatErrorResponse(error);
    }
  }
} 
