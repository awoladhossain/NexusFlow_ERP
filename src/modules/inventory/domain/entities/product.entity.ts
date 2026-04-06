export class Product {
  constructor(
    public readonly id: string,
    public name: string,
    public sku: string, // Stock Keeping Unit
    public price: number,
    public stockQuantity: number,
    public categoryId: string,
    public description: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
  updateStock(quantity: number): void {
    if (this.stockQuantity + quantity < 0) {
      throw new Error('Insufficient stock in inventory');
    }
    this.stockQuantity += quantity;
  }
}
