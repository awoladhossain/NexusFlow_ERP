import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * DatabaseModule is responsible for configuring and providing the database connection using TypeORM.
 * It uses the ConfigModule to load database connection parameters from environment variables, allowing for flexible configuration across different environments (development, testing, production).
 * The TypeOrmModule is configured asynchronously to ensure that the ConfigService is available when setting up the database connection.
 * The synchronize option is set to true for development purposes, which automatically synchronizes the database schema with the defined entities. This should be used with caution in production environments to avoid unintended data loss.
 * Note: In a production environment, it is recommended to set synchronize to false and manage database migrations explicitly to ensure data integrity and control over schema changes.
 * The DatabaseModule can be imported into the main application module (AppModule) to establish the database connection and make it available throughout the application for data access operations via repositories and services.
 * This module serves as a central point for database configuration and connection management, ensuring that the application can interact with the database efficiently and securely while adhering to best practices for configuration management and environment-specific settings.
 * Overall, the DatabaseModule is a crucial component of the application's infrastructure, enabling seamless integration with the database and providing a foundation for data persistence and retrieval operations across the various modules and services within the application.
 * Note: The actual implementation of the DatabaseModule may include additional configurations or providers as needed to support specific database features, such as connection pooling, caching, or custom repositories, depending on the requirements of the application and the chosen database solution.
 * The DatabaseModule is designed to be flexible and extensible, allowing for easy integration with different database systems (e.g., MySQL, MongoDB, etc.) by adjusting the TypeORM configuration accordingly, while maintaining a consistent interface for data access across the application.
 * In summary, the DatabaseModule is a key part of the application's infrastructure, responsible for setting up and managing the database connection using TypeORM, and providing a centralized configuration point for database-related settings and operations throughout the application.
 */
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        autoLoadEntities: true, // Automatically load entities from the project
        synchronize: true, // Automatically synchronize the database schema with the entities (use with caution in production)
      }),
    }),
  ],
})
export class DatabaseModule {}
