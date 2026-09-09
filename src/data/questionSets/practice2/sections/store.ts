import type { QuestionSection } from "../../../../domain/questions";

export const practiceExamTwoStoreSection = {
  section: "store",
  author: "set2-store-author",
  questions: [
    {
      id: "pde-v42-p2-store-01",
      kind: "single",
      section: "store",
      objective:
        "3.1 Selecting storage systems: choosing managed services (BigQuery, BigLake, AlloyDB, Bigtable, Spanner, Cloud SQL, Cloud Storage, Firestore, Memorystore)",
      prompt:
        "An online underwriting application already uses PostgreSQL extensions and must run complex analytical queries against its current transactional policies without sending those policies to a separate analytical store. It also requires managed high availability across zones. Which service should the team select?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "alloydb-overview",
          title: "AlloyDB overview",
          url: "https://cloud.google.com/alloydb/docs/overview",
          claim:
            "AlloyDB is a fully managed PostgreSQL-compatible service designed for hybrid transactional and analytical processing on live transactional data; its highly available primary instance uses redundant nodes in different zones with automatic failover.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "AlloyDB for PostgreSQL with a highly available primary instance.",
          feedback:
            "AlloyDB preserves PostgreSQL compatibility, supports HTAP queries against live transactional data, and provides the required multi-zone automatic failover.",
          evidenceIds: ["alloydb-overview"],
        },
        {
          id: "b",
          text: "BigQuery with a scheduled export of the policy database.",
          feedback:
            "A scheduled export creates separate analytical data, while the requirement is to run the analytical queries against the live PostgreSQL transactional policies.",
          evidenceIds: ["alloydb-overview"],
        },
        {
          id: "c",
          text: "A self-managed PostgreSQL cluster on Compute Engine.",
          feedback:
            "Self-managed PostgreSQL could retain compatibility, but it does not provide AlloyDB's managed infrastructure, automated backups, or built-in multi-zone high availability required here.",
          evidenceIds: ["alloydb-overview"],
        },
        {
          id: "d",
          text: "Memorystore for Redis as the policy system of record.",
          feedback:
            "The workload needs PostgreSQL-compatible relational transactions and complex live analytics, not an in-memory cache service.",
          evidenceIds: ["alloydb-overview"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pde-v42-p2-store-02",
      kind: "single",
      section: "store",
      objective:
        "3.1 Selecting storage systems: analyzing data access patterns",
      prompt:
        "A field-service mobile application must store technician work orders whose optional fields vary by job type. Mobile clients must receive changes immediately and continue working while temporarily offline. The team wants a serverless managed database that scales without manual sharding. Which service best fits?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "firestore-overview",
          title: "Firestore overview",
          url: "https://cloud.google.com/firestore/docs/overview",
          claim:
            "Firestore is a fully managed, serverless document database for mobile, web, and server applications; it provides real-time synchronization, offline data handling, and automatic scaling without manual sharding.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Firestore.",
          feedback:
            "Firestore's document model accommodates the variable work-order fields and its real-time synchronization, offline handling, and serverless scaling meet all stated client requirements.",
          evidenceIds: ["firestore-overview"],
        },
        {
          id: "b",
          text: "BigQuery.",
          feedback:
            "The scenario requires an operational mobile application database with real-time client synchronization and offline behavior, not an analytical warehouse.",
          evidenceIds: ["firestore-overview"],
        },
        {
          id: "c",
          text: "Cloud Storage buckets containing one JSON file per work order.",
          feedback:
            "Object storage does not supply the managed document-database synchronization and offline client capabilities required by the application.",
          evidenceIds: ["firestore-overview"],
        },
        {
          id: "d",
          text: "A manually sharded PostgreSQL deployment.",
          feedback:
            "Manual sharding contradicts the operational requirement that the managed database scale without sharding administration.",
          evidenceIds: ["firestore-overview"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pde-v42-p2-store-03",
      kind: "single",
      section: "store",
      objective:
        "3.1 Selecting storage systems: planning for storage costs and performance",
      prompt:
        "A product API reads the same account-entitlement records thousands of times per minute. PostgreSQL remains the durable source of truth, and the API can refill cached values after eviction. The new layer must provide sub-millisecond reads, managed replication, and automatic failover. What should the team use?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "memorystore-redis-overview",
          title: "Memorystore for Redis overview",
          url: "https://cloud.google.com/memorystore/docs/redis/memorystore-for-redis-overview",
          claim:
            "Memorystore for Redis is a fully managed Redis in-memory store for application caches with sub-millisecond access; its Standard Tier provides cross-zone replication and automatic failover.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "A Standard Tier Memorystore for Redis instance used as a cache in front of PostgreSQL.",
          feedback:
            "Memorystore supplies the needed in-memory cache latency and the Standard Tier supplies managed replication and automatic failover while PostgreSQL remains authoritative.",
          evidenceIds: ["memorystore-redis-overview"],
        },
        {
          id: "b",
          text: "A Basic Tier Memorystore for Redis instance used as a cache in front of PostgreSQL.",
          feedback:
            "Basic Tier provides a cache without replication or automatic failover, so it does not meet the availability requirement.",
          evidenceIds: ["memorystore-redis-overview"],
        },
        {
          id: "c",
          text: "A BigQuery table queried by the API for every entitlement lookup.",
          feedback:
            "The required access pattern is a heavily accessed, sub-millisecond application cache, which Memorystore documents as a caching use case rather than BigQuery queries.",
          evidenceIds: ["memorystore-redis-overview"],
        },
        {
          id: "d",
          text: "A self-managed Redis virtual machine with manually configured replication.",
          feedback:
            "The requirement calls for managed replication and failover; Memorystore automates those Redis operational tasks.",
          evidenceIds: ["memorystore-redis-overview"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pde-v42-p2-store-04",
      kind: "single",
      section: "store",
      objective: "3.1 Selecting storage systems: lifecycle management of data",
      prompt:
        "A research bucket contains objects larger than 128 KiB. Scientists access each object unpredictably: some are never read again, while others suddenly become active. The team wants automatic cost optimization based on each object's access history, accepts asynchronous transitions, and does not need deterministic transition dates. What should it configure?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "storage-autoclass",
          title: "Autoclass",
          url: "https://cloud.google.com/storage/docs/autoclass",
          claim:
            "Cloud Storage Autoclass automatically changes eligible objects' storage classes according to individual access patterns, is intended for unknown or unpredictable access patterns, and performs eligible transitions asynchronously.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Enable Cloud Storage Autoclass for the bucket.",
          feedback:
            "Autoclass directly automates class changes from each object's unpredictable access pattern, and the stated tolerance for asynchronous behavior removes the need for fixed-date lifecycle rules.",
          evidenceIds: ["storage-autoclass"],
        },
        {
          id: "b",
          text: "Configure fixed-age SetStorageClass lifecycle rules for every object.",
          feedback:
            "Fixed-age rules cannot react to the individual, unpredictable access history that is the basis for Autoclass transitions.",
          evidenceIds: ["storage-autoclass"],
        },
        {
          id: "c",
          text: "Put every object into Archive storage at upload time.",
          feedback:
            "Objects that become active must move to Standard storage for future accesses; assigning a single class at upload does not automate that per-object adjustment.",
          evidenceIds: ["storage-autoclass"],
        },
        {
          id: "d",
          text: "Run a daily application that assigns storage classes from file-name prefixes.",
          feedback:
            "File-name prefixes do not capture actual access patterns, and the application adds management that Autoclass is designed to eliminate.",
          evidenceIds: ["storage-autoclass"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pde-v42-p2-store-05",
      kind: "single",
      section: "store",
      objective:
        "3.2 Planning for using a data warehouse: designing the data model",
      prompt:
        "A BigQuery retail warehouse must support many dashboard measures from a daily sales fact table. Product, store, and calendar attributes are shared by several fact tables and are maintained independently. The team wants a dimensional star schema and wants BigQuery to use known fact-to-dimension relationships when optimizing queries. What should it implement?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "bigquery-primary-foreign-keys",
          title: "Use primary and foreign keys",
          url: "https://cloud.google.com/bigquery/docs/primary-foreign-keys",
          claim:
            "BigQuery supports non-enforced primary and foreign key constraints, and it can use declared key relationships to optimize queries, including join elimination and other query-plan optimizations.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Create a sales fact table with foreign keys to independently maintained product, store, and calendar dimension tables, and declare the applicable non-enforced primary and foreign key constraints.",
          feedback:
            "This is the requested star schema: reusable dimensions remain independent of the fact table, and correctly declared key constraints provide relationship information BigQuery can use for optimization.",
          evidenceIds: ["bigquery-primary-foreign-keys"],
        },
        {
          id: "b",
          text: "Embed all product, store, and calendar attributes in every sales fact row and omit key declarations.",
          feedback:
            "Embedding the independently maintained, shared dimensions duplicates their attributes across facts and does not declare the fact-to-dimension relationships that the optimizer can use.",
          evidenceIds: ["bigquery-primary-foreign-keys"],
        },
        {
          id: "c",
          text: "Store every dashboard measure in a separate wide table without dimension tables.",
          feedback:
            "Separate wide tables do not represent the shared dimensional relationships or provide declared primary and foreign keys for BigQuery query optimization.",
          evidenceIds: ["bigquery-primary-foreign-keys"],
        },
        {
          id: "d",
          text: "Declare primary and foreign keys but allow duplicate dimension keys and orphaned fact keys.",
          feedback:
            "BigQuery does not enforce these constraints, so incorrectly declared constraints can cause incorrect query results; the data must honor the declared relationships.",
          evidenceIds: ["bigquery-primary-foreign-keys"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pde-v42-p2-store-06",
      kind: "single",
      section: "store",
      objective:
        "3.2 Planning for using a data warehouse: deciding the degree of data normalization",
      prompt:
        "A BigQuery platform stores medical-device readings. Each reading has many calibration events, but analysts frequently query calibration events across devices and join them to a separate technician fact table. Calibration events are also corrected independently of readings. Which model best fits these access and maintenance requirements?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "bigquery-nested-repeated",
          title: "Use nested and repeated fields",
          url: "https://cloud.google.com/bigquery/docs/best-practices-performance-nested",
          claim:
            "BigQuery recommends nested and repeated fields for hierarchical data that is frequently queried together, but recommends separate tables when child entities are queried independently or require their own relationships.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Model readings and calibration events as separate tables joined by device and reading keys.",
          feedback:
            "Calibration events are independently queried, joined to another fact table, and corrected independently, so separate tables fit the documented boundary for using normalized related entities.",
          evidenceIds: ["bigquery-nested-repeated"],
        },
        {
          id: "b",
          text: "Store all calibration events as a repeated RECORD field within each reading row.",
          feedback:
            "Repeated nested fields are suited to hierarchical children frequently queried with their parent; here calibration events have independent queries and another relationship.",
          evidenceIds: ["bigquery-nested-repeated"],
        },
        {
          id: "c",
          text: "Serialize calibration events into a JSON-formatted STRING in each reading row.",
          feedback:
            "A JSON string does not provide the structured separate-table model needed for independent calibration-event queries and joins.",
          evidenceIds: ["bigquery-nested-repeated"],
        },
        {
          id: "d",
          text: "Duplicate every calibration event onto the technician fact table.",
          feedback:
            "Duplicating the child entity into another fact table does not preserve a single independently maintained calibration-event relation.",
          evidenceIds: ["bigquery-nested-repeated"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pde-v42-p2-store-07",
      kind: "single",
      section: "store",
      objective:
        "3.2 Planning for using a data warehouse: defining architecture to support data access patterns",
      prompt:
        "A 40 TB BigQuery claims table has an INT64 claim_number from 0 through 99,999,999. Most investigations filter a contiguous claim-number range and then an exact adjuster_id. There is no useful timestamp predicate. The team wants BigQuery to prune both large data segments and storage blocks. How should it organize the table?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "bigquery-integer-range-partitions",
          title: "Introduction to partitioned tables",
          url: "https://cloud.google.com/bigquery/docs/partitioned-tables",
          claim:
            "BigQuery supports integer-range partitioning on an INTEGER column and can prune partitions when a query filters the partitioning column.",
        },
        {
          id: "bigquery-clustered-tables",
          title: "Introduction to clustered tables",
          url: "https://cloud.google.com/bigquery/docs/clustered-tables",
          claim:
            "BigQuery clustered tables sort data by clustering columns and prune storage blocks when queries filter those columns, reducing scanned data.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Integer-range partition by claim_number and cluster by adjuster_id.",
          feedback:
            "Claim-number range predicates prune integer-range partitions, and the exact adjuster predicate lets BigQuery prune blocks clustered by adjuster_id.",
          evidenceIds: [
            "bigquery-integer-range-partitions",
            "bigquery-clustered-tables",
          ],
        },
        {
          id: "b",
          text: "Partition by adjuster_id and cluster by claim_number.",
          feedback:
            "This reverses the dominant range predicate: exact adjuster values do not make the claim-number range the partition filter needed for partition pruning.",
          evidenceIds: [
            "bigquery-integer-range-partitions",
            "bigquery-clustered-tables",
          ],
        },
        {
          id: "c",
          text: "Cluster by claim_number and adjuster_id without partitioning.",
          feedback:
            "Clustering can prune blocks, but without integer-range partitioning it cannot prune the large claim-number segments before block-level scanning.",
          evidenceIds: [
            "bigquery-integer-range-partitions",
            "bigquery-clustered-tables",
          ],
        },
        {
          id: "d",
          text: "Partition by ingestion time and cluster by adjuster_id.",
          feedback:
            "The investigations do not filter on ingestion time, so those queries cannot use an ingestion-time partition filter to prune the claim-number ranges.",
          evidenceIds: [
            "bigquery-integer-range-partitions",
            "bigquery-clustered-tables",
          ],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pde-v42-p2-store-08",
      kind: "single",
      section: "store",
      objective: "3.3 Using a data lake: processing data",
      prompt:
        "A media company needs a lake table format that its Spark jobs can write and that BigQuery can query without copying the data. The table must retain open Apache Iceberg metadata so it can be accessed through a standards-based Iceberg REST catalog. Which approach should it use?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "bigquery-iceberg-managed-tables",
          title: "Apache Iceberg managed tables",
          url: "https://cloud.google.com/bigquery/docs/biglake-iceberg-tables-in-bigquery",
          claim:
            "BigQuery Apache Iceberg managed tables use the open Apache Iceberg table format and can be accessed through an Iceberg REST catalog by compatible engines while remaining queryable in BigQuery.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Create an Apache Iceberg managed table in BigQuery and use its Iceberg REST catalog for compatible Spark access.",
          feedback:
            "This preserves the required open Iceberg table format and REST-catalog interoperability while allowing BigQuery to query the managed Iceberg table.",
          evidenceIds: ["bigquery-iceberg-managed-tables"],
        },
        {
          id: "b",
          text: "Load each batch into a native BigQuery table and export CSV files for Spark.",
          feedback:
            "CSV exports do not preserve the required Apache Iceberg table metadata or provide the requested Iceberg REST catalog interface.",
          evidenceIds: ["bigquery-iceberg-managed-tables"],
        },
        {
          id: "c",
          text: "Write newline-delimited JSON objects to Cloud Storage and infer the schema for each query.",
          feedback:
            "Raw JSON objects do not provide the open Iceberg table format, its metadata, or standards-based catalog access required by the scenario.",
          evidenceIds: ["bigquery-iceberg-managed-tables"],
        },
        {
          id: "d",
          text: "Store only Parquet files and maintain table metadata independently in each processing engine.",
          feedback:
            "Parquet files alone do not provide the shared Apache Iceberg metadata and REST catalog needed for interoperable table management.",
          evidenceIds: ["bigquery-iceberg-managed-tables"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pde-v42-p2-store-09",
      kind: "single",
      section: "store",
      objective: "3.3 Using a data lake: monitoring the data lake",
      prompt:
        "A lakehouse's daily BigQuery sales table must be checked after every load. The platform must fail a quality check when more than 0.5% of order_id values are NULL, retain rule-level pass and fail results, and alert operations without operating validation infrastructure. What should the team configure?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "knowledge-catalog-auto-quality",
          title: "Auto data quality overview",
          url: "https://cloud.google.com/dataplex/docs/auto-data-quality-overview",
          claim:
            "Knowledge Catalog auto data quality runs managed scans on BigQuery tables, supports NonNullExpectation rules with passing thresholds, records rule-level results, and supports Cloud Logging alerts for data-quality jobs and rule results.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Schedule a Knowledge Catalog auto data quality scan with a NonNullExpectation for order_id and a 99.5% passing threshold, then create Cloud Logging alerts for failed results.",
          feedback:
            "The managed scan expresses the NULL threshold, retains detailed rule results, and supplies the documented Cloud Logging signal for operational alerting.",
          evidenceIds: ["knowledge-catalog-auto-quality"],
        },
        {
          id: "b",
          text: "Create a BigQuery view that filters NULL order_id values.",
          feedback:
            "Filtering NULLs hides the bad records rather than measuring the required threshold, recording quality results, and alerting operations when the rule fails.",
          evidenceIds: ["knowledge-catalog-auto-quality"],
        },
        {
          id: "c",
          text: "Run an ad hoc query manually whenever analysts suspect a problem.",
          feedback:
            "Manual queries do not perform the required post-load automated validation or provide managed rule-level results and alerts.",
          evidenceIds: ["knowledge-catalog-auto-quality"],
        },
        {
          id: "d",
          text: "Configure an auto data profile scan without a data quality rule.",
          feedback:
            "Profiling can generate observations and recommendations, but the explicit NULL percentage requirement needs a managed data quality rule with a passing threshold.",
          evidenceIds: ["knowledge-catalog-auto-quality"],
        },
      ],
      correctChoiceId: "a",
    },
    {
      id: "pde-v42-p2-store-10",
      kind: "single",
      section: "store",
      objective:
        "3.4 Designing for a data platform: building a federated governance model for distributed data systems",
      prompt:
        "Finance, supply chain, and marketing teams each own datasets in separate projects. The enterprise wants each team to retain ownership while publishing a discoverable, trusted package of related assets with documentation, refresh and quality commitments, and a self-service access-request path. What should each team create?",
      verifiedOn: "2026-09-09",
      evidence: [
        {
          id: "knowledge-catalog-data-products",
          title: "About data products",
          url: "https://cloud.google.com/dataplex/docs/data-products-overview",
          claim:
            "Knowledge Catalog data products are curated logical collections of assets that have an owner, documentation, contracts for expectations such as refresh and quality, access groups, and self-service consumer access requests.",
        },
      ],
      choices: [
        {
          id: "a",
          text: "Create a Knowledge Catalog data product for each domain-owned collection of assets, with an owner, contract, documentation, and access groups.",
          feedback:
            "Data products preserve decentralized producer ownership while publishing trusted, documented assets with contracts and a documented self-service access workflow.",
          evidenceIds: ["knowledge-catalog-data-products"],
        },
        {
          id: "b",
          text: "Copy every dataset into a centrally owned BigQuery project and let only the central team grant access.",
          feedback:
            "Centralizing all copies removes the required domain ownership model and does not provide the data-product contract and self-service access capabilities.",
          evidenceIds: ["knowledge-catalog-data-products"],
        },
        {
          id: "c",
          text: "Maintain a shared spreadsheet listing datasets and email each domain owner for access.",
          feedback:
            "A spreadsheet and email process does not formally package assets with contracts, access groups, documentation, and self-service access requests.",
          evidenceIds: ["knowledge-catalog-data-products"],
        },
        {
          id: "d",
          text: "Grant all analysts project-level Viewer access in every domain project.",
          feedback:
            "Broad project access neither curates related assets nor supplies the ownership, contract, and targeted access-group controls required for trusted domain data products.",
          evidenceIds: ["knowledge-catalog-data-products"],
        },
      ],
      correctChoiceId: "a",
    },
  ],
} satisfies QuestionSection<"store">;
