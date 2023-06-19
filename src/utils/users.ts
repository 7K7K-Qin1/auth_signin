import { Request } from '@nestjs/common';

/**
 * This type is used to add the user object to the request object.
 * This object is usually added by the AuthGuard since
 * the regular Request object does not have the user object.
 */
export interface RequestWithUser extends Request {
  user: {
    id: string;
  };
}
