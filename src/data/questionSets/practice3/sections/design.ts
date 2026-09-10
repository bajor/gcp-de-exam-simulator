import type { QuestionSection } from "../../../../domain/questions";

export const designSection = {
  section: "design",
  author: "set3-design-author",
  questions: [
    {
      id: "pde-v42-p3-design-01",
      section: "design",
      objective: "1.1 Designing for security and compliance",
      kind: "single",
      prompt:
        "A company must prevent managed BigQuery workloads from exfiltrating data to unapproved Google Cloud services, while retaining access to explicitly approved services. What should the data engineering team design?",
      choices: [
        {
          id: "a",
          text: "A VPC Service Controls service perimeter with restricted services and controlled egress rules",
          feedback: "Correct. A service perimeter restricts access to protected services and can control egress to approved destinations.",
          evidenceIds: ["vpc-sc"],
        },
        {
          id: "b",
          text: "A VPC firewall rule that permits only BigQuery API traffic",
          feedback: "Firewall rules control network traffic, not access between managed Google APIs protected by a service perimeter.",
          evidenceIds: ["vpc-sc"],
        },
        {
          id: "c",
          text: "Private Google Access on the workload subnet",
          feedback: "Private Google Access provides a private route to Google APIs; it does not establish a data-exfiltration perimeter.",
          evidenceIds: ["vpc-sc"],
        },
        {
          id: "d",
          text: "Cloud Audit Logs data-access logging for BigQuery",
          feedback: "Audit logs provide visibility after access, but do not prevent requests from leaving the approved boundary.",
          evidenceIds: ["vpc-sc"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "vpc-sc",
          title: "VPC Service Controls overview",
          url: "https://cloud.google.com/vpc-service-controls/docs/overview",
          claim: "VPC Service Controls creates service perimeters around Google-managed services and supports controlling egress from a perimeter.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-02",
      section: "design",
      objective: "1.1 Designing for security and compliance",
      kind: "single",
      prompt:
        "An organization must ensure that newly created Cloud Storage buckets and BigQuery datasets use only approved European locations. Which centrally managed design best enforces this requirement?",
      choices: [
        {
          id: "a",
          text: "Apply the Organization Policy location constraint to the organization or the relevant folders",
          feedback: "Correct. The resource-locations organization policy constrains where supported resources can be created.",
          evidenceIds: ["locations"],
        },
        {
          id: "b",
          text: "Grant project creators only the Storage Object Admin role",
          feedback: "An object-management role does not limit the geographic locations available when creating resources.",
          evidenceIds: ["locations"],
        },
        {
          id: "c",
          text: "Require customer-managed encryption keys in an EU key ring",
          feedback: "Key location does not by itself restrict the locations in which supported resources are created.",
          evidenceIds: ["locations"],
        },
        {
          id: "d",
          text: "Configure a Cloud Storage lifecycle rule on every bucket",
          feedback: "Lifecycle rules manage stored objects and do not prevent creation of resources in disallowed locations.",
          evidenceIds: ["locations"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "locations",
          title: "Restricting resource locations",
          url: "https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations",
          claim: "The resource-locations organization policy constraint restricts the physical locations in which supported resources can be created.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-03",
      section: "design",
      objective: "1.1 Designing for security and compliance",
      kind: "single",
      prompt:
        "Security policy requires that data engineers cannot accidentally make any object in a project publicly accessible, including through future IAM policy changes. What should be enabled?",
      choices: [
        {
          id: "a",
          text: "Cloud Storage public access prevention",
          feedback: "Correct. Public access prevention blocks public access grants to Cloud Storage buckets and objects.",
          evidenceIds: ["pap"],
        },
        {
          id: "b",
          text: "Uniform bucket-level access",
          feedback: "Uniform bucket-level access removes object ACLs, but it does not by itself prevent public IAM grants.",
          evidenceIds: ["pap"],
        },
        {
          id: "c",
          text: "A retention policy with a locked retention period",
          feedback: "Retention policies govern deletion and replacement, not who can read objects.",
          evidenceIds: ["pap"],
        },
        {
          id: "d",
          text: "Default object encryption with a customer-managed key",
          feedback: "Encryption protects data at rest but does not prevent a principal from granting public read access.",
          evidenceIds: ["pap"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "pap",
          title: "Public access prevention",
          url: "https://cloud.google.com/storage/docs/public-access-prevention",
          claim: "Public access prevention prevents Cloud Storage buckets and objects from being exposed publicly through IAM or ACL configuration.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-04",
      section: "design",
      objective: "1.1 Designing for security and compliance",
      kind: "single",
      prompt:
        "A regulated archive must retain all current and future Cloud Storage objects for seven years. After configuration, no administrator may reduce or remove that requirement. What should the team configure?",
      choices: [
        {
          id: "a",
          text: "A seven-year bucket retention policy, then lock the policy with Bucket Lock",
          feedback: "Correct. Locking a bucket retention policy makes it permanent: its duration cannot be reduced and the policy cannot be removed.",
          evidenceIds: ["bucket-lock"],
        },
        {
          id: "b",
          text: "A seven-year bucket retention policy without locking it",
          feedback: "An unlocked retention policy can still be reduced or removed by an authorized administrator.",
          evidenceIds: ["bucket-lock"],
        },
        {
          id: "c",
          text: "Object Versioning with a lifecycle rule that deletes noncurrent versions after seven years",
          feedback: "Versioning preserves old versions, but a lifecycle rule does not make the seven-year retention requirement irreversible.",
          evidenceIds: ["bucket-lock"],
        },
        {
          id: "d",
          text: "A legal hold on each object created in the bucket",
          feedback: "Object holds apply at the individual-object level and do not create an immutable bucket-wide policy for current and future objects.",
          evidenceIds: ["bucket-lock"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "bucket-lock",
          title: "Bucket Lock",
          url: "https://cloud.google.com/storage/docs/bucket-lock",
          claim: "A locked Cloud Storage bucket retention policy cannot be removed or reduced and applies to current and future objects in the bucket.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-05",
      section: "design",
      objective: "1.2 Designing for reliability and fidelity",
      kind: "single",
      prompt:
        "A producer writes critical objects to a dual-region Cloud Storage bucket. The recovery design requires a recovery point objective of 15 minutes if the primary region is unavailable. Which capability should be used?",
      choices: [
        {
          id: "a",
          text: "Enable turbo replication for the dual-region bucket",
          feedback: "Correct. Turbo replication is designed to replicate newly written objects between dual-region replicas within a 15-minute recovery point objective.",
          evidenceIds: ["availability"],
        },
        {
          id: "b",
          text: "Use a standard dual-region bucket without additional configuration",
          feedback: "Standard dual-region replication does not provide the stated 15-minute replication objective.",
          evidenceIds: ["availability"],
        },
        {
          id: "c",
          text: "Enable object versioning",
          feedback: "Object versioning preserves noncurrent object versions; it does not provide a cross-region replication RPO.",
          evidenceIds: ["availability"],
        },
        {
          id: "d",
          text: "Set a lifecycle rule to transition objects to Archive storage",
          feedback: "Storage-class transitions do not control replication latency between dual-region replicas.",
          evidenceIds: ["availability"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "availability",
          title: "Cloud Storage availability and durability",
          url: "https://cloud.google.com/storage/docs/availability-durability",
          claim: "Turbo replication provides a 15-minute recovery point objective for newly written objects in dual-region buckets.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-06",
      section: "design",
      objective: "1.2 Designing for reliability and fidelity",
      kind: "single",
      prompt:
        "A pipeline downloads CSV files from Cloud Storage before loading them into a warehouse. It must detect corruption during download without maintaining a separate checksum manifest. What should it validate?",
      choices: [
        {
          id: "a",
          text: "The object checksum returned by Cloud Storage",
          feedback: "Correct. Cloud Storage exposes object checksums that clients can use to validate downloaded data.",
          evidenceIds: ["validation"],
        },
        {
          id: "b",
          text: "The object's storage class",
          feedback: "Storage class describes storage and availability characteristics, not data integrity.",
          evidenceIds: ["validation"],
        },
        {
          id: "c",
          text: "The object's generation number only",
          feedback: "A generation identifies an object version; it does not validate the bytes received by the client.",
          evidenceIds: ["validation"],
        },
        {
          id: "d",
          text: "The bucket's retention policy",
          feedback: "A retention policy prevents deletion or replacement during its retention period and does not detect transfer corruption.",
          evidenceIds: ["validation"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "validation",
          title: "Data validation and change detection",
          url: "https://cloud.google.com/storage/docs/data-validation",
          claim: "Cloud Storage provides CRC32C and MD5 checksums that clients can use to validate data integrity during uploads and downloads.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-07",
      section: "design",
      objective: "1.2 Designing for reliability and fidelity",
      kind: "single",
      prompt:
        "A daily Dataform incremental table is the source for financial reports. A source-data correction means the next incremental run would delete historical rows. The team must block the destructive run until it is reviewed. What should they configure?",
      choices: [
        {
          id: "a",
          text: "Set the incremental table's protected option to true",
          feedback: "Correct. A protected incremental table prevents Dataform from running a query that would delete the table or its data.",
          evidenceIds: ["dataform"],
        },
        {
          id: "b",
          text: "Add a BigQuery table expiration time",
          feedback: "An expiration time schedules eventual deletion and does not protect an incremental table from a destructive run.",
          evidenceIds: ["dataform"],
        },
        {
          id: "c",
          text: "Use a non-incremental Dataform table instead",
          feedback: "Changing table type does not specifically prevent a query that deletes existing data.",
          evidenceIds: ["dataform"],
        },
        {
          id: "d",
          text: "Set the table type to view",
          feedback: "A view changes how data is materialized but does not provide the protected-incremental safeguard.",
          evidenceIds: ["dataform"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "dataform",
          title: "Create tables in Dataform",
          url: "https://cloud.google.com/dataform/docs/create-tables",
          claim: "The protected option on a Dataform incremental table prevents runs that would delete the table or its data.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-08",
      section: "design",
      objective: "1.3 Designing for flexibility and portability",
      kind: "single",
      prompt:
        "An organization stores regulated data in Amazon S3 and must analyze it with BigQuery without copying it into Google Cloud. Which architecture meets the requirement?",
      choices: [
        {
          id: "a",
          text: "Use BigQuery Omni to query data in Amazon S3",
          feedback: "Correct. BigQuery Omni enables analysis of data in Amazon S3 while the data remains in AWS.",
          evidenceIds: ["omni"],
        },
        {
          id: "b",
          text: "Use BigQuery Data Transfer Service to copy the files into a BigQuery dataset",
          feedback: "Copying the files into BigQuery violates the requirement that the data remain in Amazon S3.",
          evidenceIds: ["omni"],
        },
        {
          id: "c",
          text: "Export the S3 data to a dual-region Cloud Storage bucket before querying it",
          feedback: "Exporting to Cloud Storage creates a second copy outside AWS and does not meet the constraint.",
          evidenceIds: ["omni"],
        },
        {
          id: "d",
          text: "Replicate S3 objects to Bigtable and analyze them there",
          feedback: "Replicating data changes its location and Bigtable is not the BigQuery cross-cloud analysis solution.",
          evidenceIds: ["omni"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "omni",
          title: "Introduction to BigQuery Omni",
          url: "https://cloud.google.com/bigquery/docs/omni-introduction",
          claim: "BigQuery Omni lets users analyze data in Amazon S3 and other supported clouds without moving the data into Google Cloud.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-09",
      section: "design",
      objective: "1.3 Designing for flexibility and portability",
      kind: "single",
      prompt:
        "A migration factory has thousands of Teradata SQL files. It needs to translate them to GoogleSQL in repeatable batches and write the results to Cloud Storage for code review. Which tool should the team use?",
      choices: [
        {
          id: "a",
          text: "The BigQuery batch SQL translator",
          feedback: "Correct. The batch SQL translator translates multiple source SQL files and writes translated output to Cloud Storage.",
          evidenceIds: ["batch-translator"],
        },
        {
          id: "b",
          text: "The BigQuery interactive SQL translator",
          feedback: "The interactive translator is for translating individual queries in the Google Cloud console, not a file batch workflow.",
          evidenceIds: ["batch-translator"],
        },
        {
          id: "c",
          text: "BigQuery Data Transfer Service",
          feedback: "Data Transfer Service loads data; it does not translate Teradata SQL source files to GoogleSQL.",
          evidenceIds: ["batch-translator"],
        },
        {
          id: "d",
          text: "Database Migration Service continuous migration",
          feedback: "Database Migration Service migrates supported database data and does not provide batch SQL-file translation.",
          evidenceIds: ["batch-translator"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "batch-translator",
          title: "Translate SQL in batch",
          url: "https://cloud.google.com/bigquery/docs/batch-sql-translator",
          claim: "The BigQuery batch SQL translator translates SQL files in batch and stores translated output in Cloud Storage.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-10",
      section: "design",
      objective: "1.3 Designing for flexibility and portability",
      kind: "single",
      prompt:
        "A developer is converting one Oracle query to GoogleSQL and needs to inspect and edit the suggested translation immediately in the Google Cloud console. Which tool is most appropriate?",
      choices: [
        {
          id: "a",
          text: "The BigQuery interactive SQL translator",
          feedback: "Correct. The interactive SQL translator lets users enter a query, select a source dialect, and review the translated GoogleSQL in the console.",
          evidenceIds: ["interactive-translator"],
        },
        {
          id: "b",
          text: "The BigQuery batch SQL translator",
          feedback: "The batch translator is intended for files and batch output rather than an interactive single-query review.",
          evidenceIds: ["interactive-translator"],
        },
        {
          id: "c",
          text: "BigQuery Dataform",
          feedback: "Dataform manages SQL workflows and tables; it is not the SQL dialect translation interface.",
          evidenceIds: ["interactive-translator"],
        },
        {
          id: "d",
          text: "BigQuery Data Transfer Service",
          feedback: "Data Transfer Service transfers data from supported sources; it does not translate SQL dialects.",
          evidenceIds: ["interactive-translator"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "interactive-translator",
          title: "Translate SQL interactively",
          url: "https://cloud.google.com/bigquery/docs/interactive-sql-translator",
          claim: "The BigQuery interactive SQL translator is a console-based interface for translating individual source-dialect queries to GoogleSQL.",
        },
      ],
    },
    {
      id: "pde-v42-p3-design-11",
      section: "design",
      objective: "1.3 Designing for flexibility and portability",
      kind: "single",
      prompt:
        "A team plans to migrate a self-managed PostgreSQL database to AlloyDB for PostgreSQL and wants a Google-managed migration service. Which service should it evaluate first?",
      choices: [
        {
          id: "a",
          text: "Database Migration Service",
          feedback: "Correct. Database Migration Service supports migrations from PostgreSQL to AlloyDB for PostgreSQL.",
          evidenceIds: ["dms"],
        },
        {
          id: "b",
          text: "BigQuery Data Transfer Service",
          feedback: "BigQuery Data Transfer Service loads data into BigQuery and is not the managed database-to-AlloyDB migration service.",
          evidenceIds: ["dms"],
        },
        {
          id: "c",
          text: "Datastream",
          feedback: "Datastream is a change data capture and replication service; the documented managed database migration service is Database Migration Service.",
          evidenceIds: ["dms"],
        },
        {
          id: "d",
          text: "Cloud Storage Transfer Service",
          feedback: "Storage Transfer Service moves objects between storage systems and does not migrate PostgreSQL into AlloyDB.",
          evidenceIds: ["dms"],
        },
      ],
      correctChoiceId: "a",
      verifiedOn: "2026-09-10",
      evidence: [
        {
          id: "dms",
          title: "Database Migration Service supported source and destination databases",
          url: "https://cloud.google.com/database-migration/docs/supported-databases",
          claim: "Database Migration Service supports PostgreSQL source databases and AlloyDB for PostgreSQL as a destination.",
        },
      ],
    },
  ],
} satisfies QuestionSection<"design">;
