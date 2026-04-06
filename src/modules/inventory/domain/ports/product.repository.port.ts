import { Product } from '../entities/product.entity';

/**
 * Interface for the Product Repository, defining the contract for data access operations related to products.
 * This interface abstracts the underlying data storage mechanism, allowing for flexibility in implementation (e.g., in-memory, database, etc.).
 * Implementations of this interface should handle the persistence and retrieval of Product entities, ensuring that the domain logic remains decoupled from data access concerns.
 * Methods:
 * - save(product: Product): Promise<void> - Saves a new product to the repository.
 * - findById(id: string): Promise<Product | null> - Retrieves a product by its unique identifier. Returns null if not found.
 * - findAll(): Promise<Product[]> - Retrieves all products from the repository.
 * - deleteById(id: string): Promise<void> - Deletes a product by its unique identifier.
 * - update(product: Product): Promise<void> - Updates an existing product in the repository.
 * Note: The actual implementation of this interface will depend on the chosen data storage solution (e.g., SQL database, NoSQL database, in-memory storage, etc.) and should handle any necessary error handling and data validation as required by the application's business logic.
 */
export interface IProductRepository {
  save(product: Product): Promise<void>;
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  deleteById(id: string): Promise<void>;
  update(product: Product): Promise<void>;
}
