import { Module } from '@nestjs/common';
import { InventoryService } from './application/services/inventory/inventory.service';
import { InventoryController } from './infrastructure/controllers/inventory/inventory.controller';

@Module({
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
