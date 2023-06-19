import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  /**
   * TTL index is not supported by Prisma yet, so we need to create it manually.
   * TTL index is used to automatically delete expired documents
   * a feature that comes with MongoDB.
   *
   * Keep in mind that you need to first create the index in your prisma schema
   * ```prisma
   * @@index([expiresAt], name: "expires_at")
   * ```
   *
   * and then run `pnpm prisma db push` to create the index in your database.
   * Otherwise, you will get an error.
   */
  async createTTLIndex() {
    // create ttl index
    try {
      this.logger.log('Creating TTL index on DidDomain collection');
      await this.$runCommandRaw({
        collMod: 'DidDomain',
        index: {
          keyPattern: {
            expiresAt: 1,
          },
          expireAfterSeconds: 0,
        },
      });
    } catch (e) {
      console.log(e);
    }
  }
  async onModuleInit() {
    await this.$connect();
    await this.createTTLIndex();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
