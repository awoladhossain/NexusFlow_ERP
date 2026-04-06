/**
 * Product Entity - Represents a product in the inventory system, encapsulating all relevant attributes and behaviors related to a product.
 * This entity serves as the core data structure for products, containing properties such as id, name, SKU, price, stock quantity, category ID, description, and timestamps for creation and updates.
 * The Product class also includes a method to update the stock quantity, ensuring that inventory levels are maintained accurately and preventing negative stock levels.
 * This entity is designed to be used in conjunction with the Product Repository for data persistence and retrieval operations, allowing for a clean separation of concerns between the domain logic and data access layers.
 * Note: The actual implementation of this entity may include additional methods or properties as needed to support the specific requirements of the inventory management system, such as validation logic, business rules, or integration with other entities (e.g., categories, suppliers, etc.).
 * The Product entity is a fundamental part of the inventory domain model, representing the essential characteristics and behaviors of products within the system, and serves as a key component in the overall architecture of the inventory management application.
 */

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
      throw new Error('Insufficient stock in inventory for this product');
    }
    this.stockQuantity += quantity;
  }
}
