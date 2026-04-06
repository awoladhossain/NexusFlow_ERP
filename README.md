# NexusFlow ERP 🚀

NexusFlow is a cloud-native, enterprise-grade ERP system built with a focus on **High Availability**, **Scalability**, and **Clean Architecture**. It follows the **Hexagonal (Ports & Adapters) Architecture** and is designed to be transitioned from a Modular Monolith to a Microservices ecosystem.

---

## 🛠 Tech Stack

- **Backend:** NestJS (TypeScript)
- **Architecture:** Hexagonal / Clean Architecture
- **Databases:** PostgreSQL (Primary), Redis (Caching)
- **Infrastructure:** Docker, Kubernetes (K8s), RabbitMQ
- **DevOps:** GitHub Actions (CI/CD), Prometheus, Grafana
- **Cloud:** AWS (EKS, Load Balancer)

---

## 🏗 Architecture Overview

This project implements **Hexagonal Architecture** to ensure the business logic is independent of frameworks, databases, or external services.

- **Domain:** Core business entities and logic.
- **Application:** Use cases and ports (interfaces).
- **Infrastructure:** Adapters (Database, Controllers, External APIs).



---

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Compose
- Node.js (v20+)
- npm / pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/nexusflow-erp.git](https://github.com/your-username/nexusflow-erp.git)
   cd nexusflow-erp
   ```

2. **Set up Environment Variables:**
  ```bash
   cp .env.example .env
  ```

3. **Spin up Infrastructure (Docker):**

 ```bash
   docker compose up -d
  ```

4. **Install Dependencies:**
```bash
npm install
```

5. **Run the Application:**
```bash
npm run start:dev
```

### 📦 Project Structure

```bash
src/
├── modules/
│   ├── inventory/        # Inventory Management Module
│   ├── iam/              # Identity & Access Management
│   └── sales/            # Sales & Billing Module
├── common/               # Shared Utilities & Decorators
├── infrastructure/       # Global Infrastructure (DB, Redis Config)
└── main.ts               # Entry Point
```

### 🗺 Roadmap & Progress

[x] Initial Project Setup & Folder Structure

[x] Docker Infrastructure (Postgres, Redis)

[ ] Core Identity & Access Management (IAM)

[ ] Inventory Management Module

[ ] Sales & Ordering System

[ ] Microservices Migration (RabbitMQ/gRPC)

[ ] Kubernetes Deployment (K8s)

### 📄 License
This project is licensed under the MIT License.
