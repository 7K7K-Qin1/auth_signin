import {
  ApiExtraModels,
  ApiOkResponse,
  ApiProperty,
  getSchemaPath,
} from '@nestjs/swagger';
import { Config } from '../config';
import { applyDecorators, BadRequestException, Type } from '@nestjs/common';

export class GetPaginationResult<T> {
  @ApiProperty({
    description: 'The total number of items',
  })
  total: number;
  @ApiProperty({
    description: 'The total number of pages',
  })
  totalPage: number;
  @ApiProperty({
    description: 'The current page number',
  })
  page: number;
  @ApiProperty({
    description: 'The number of items per page',
  })
  pageSize: number;
  @ApiProperty({
    description: 'The items',
  })
  items: T[];
}

/**
 * Creates a custom ApiOkResponse that returns a paginated result json schema.
 * Since the default ApiOkResponse does not support this and could not identify
 * the generic type of the items, we have to create a custom one.
 *
 * You can use this decorator like this:
 * ```ts
 * @ApiOkResponsePaginated(UserDto)
 * ```
 * This will try to get the schema of the UserDto and use it as the schema of the items.
 * The result will be a json schema like this:
 * ```json
 * {
 *  total: {
 *    type: 'number',
 *  },
 *  totalPage: {
 *  type: 'number',
 *  },
 *  page: {
 *  type: 'number',
 *  },
 *  pageSize: {
 *  type: 'number',
 *  },
 *  items: {
 *  type: 'array',
 *  items: {
 *    $ref: getSchemaPath(UserDto),
 *   },
 *  },
 * }
 *
 * @param dataDto
 * @constructor
 */
export const ApiOkResponsePaginated = <DataDto extends Type<unknown>>(
  dataDto: DataDto,
) =>
  applyDecorators(
    ApiExtraModels(GetPaginationResult, dataDto),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(GetPaginationResult) },
          {
            properties: {
              items: {
                type: 'array',
                items: { $ref: getSchemaPath(dataDto) },
              },
            },
          },
        ],
      },
    }),
  );
export interface GetPaginationParams<T> {
  /**
   * The total number of items. Could be the count result from the database.
   */
  total: number;
  /**
   * The current page number. Starts from 1.
   */
  page: number;
  /**
   * The number of items per page. If not provided, will use the default page size from the config.
   */
  pageSize?: number;
  /**
   * The items.
   */
  items: T[];
}

/**
 * Generate pagination result using the given params.
 * For example, given a list of 10 items, page = 1, pageSize = 5, the result will be:
 * ```json
 * {
 *  total: 10,
 *  totalPage: 2,
 *  page: 1,
 *  pageSize: 5,
 *  items: [item1, item2, item3, item4, item5]
 * }
 * ```
 * @param params
 */
export function generatePaginationResult<T>(
  params: GetPaginationParams<T>,
): GetPaginationResult<T> {
  const pageSize = params.pageSize || Config.pageSize;
  const totalPage = Math.ceil(params.total / pageSize);

  if (params.page < 1) {
    throw new BadRequestException('Page must be greater than 0');
  }

  return {
    total: params.total,
    totalPage,
    page: params.page,
    pageSize,
    items: params.items,
  };
}
