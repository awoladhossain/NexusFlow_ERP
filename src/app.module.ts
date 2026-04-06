import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './infrastructure/database/database.module';
import { InventoryModule } from './modules/inventory/inventory.module';

/**
 * AppModule is the root module of the NestJS application, responsible for importing and configuring all other modules and services required for the application to function.
 * It imports the ConfigModule to load environment variables and make them available globally across the application, allowing for flexible configuration management.
 * The InventoryModule is imported to provide the necessary services and controllers related to inventory management, encapsulating the business logic and API endpoints for handling inventory operations.
 * The DatabaseModule is imported to establish the database connection using TypeORM, enabling data persistence and retrieval operations across the application through repositories and services.
 * The AppController and AppService are included as part of the main application module, providing basic endpoints and services that can be expanded upon as needed for additional functionality.
 * Overall, the AppModule serves as the central hub for configuring and organizing the various components of the application, ensuring that all necessary modules and services are properly integrated and available for use throughout the application.
 * Note: The actual implementation of the AppModule may include additional imports, controllers, providers, or configurations as needed to support specific features or requirements of the application, such as middleware, guards, interceptors, or additional modules for handling authentication, logging, etc. The AppModule is designed to be flexible and extensible, allowing for easy integration of new features and components as the application evolves over time.
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the configuration available globally
    }),
    InventoryModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
