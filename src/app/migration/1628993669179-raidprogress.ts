import { MigrationInterface, QueryRunner } from 'typeorm'

export class raidprogress1628993669179 implements MigrationInterface {
  name = 'raidprogress1628993669179'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."datacenters" DROP CONSTRAINT "FK_b0228d2150d3576c978f276e41a"`)
    await queryRunner.query(`ALTER TABLE "public"."jobs" DROP CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1"`)
    await queryRunner.query(
      `CREATE TABLE "raidProgress" ("id" SERIAL NOT NULL, "playerId" integer NOT NULL, "volumeId" integer NOT NULL, "cleared" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_45902da1a5e462ef1d0da78667d" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_4a2ee6b469c5c0b5fa7733e591" ON "raidProgress" ("playerId", "volumeId") `,
    )
    await queryRunner.query(`ALTER TABLE "public"."profiles" DROP CONSTRAINT "FK_b96b1d2e57097ca5c9c97603d91"`)
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" ADD CONSTRAINT "UQ_c79967e66f830de91ae5e2cf034" UNIQUE ("playerId")`,
    )
    await queryRunner.query(`ALTER TABLE "public"."profiles" ALTER COLUMN "mainJobId" SET NOT NULL`)
    await queryRunner.query(`ALTER TABLE "public"."players" DROP CONSTRAINT "FK_9555c352d755d688c5de5ff2155"`)
    await queryRunner.query(`ALTER TABLE "public"."players" ALTER COLUMN "worldId" SET NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "public"."datacenters" ADD CONSTRAINT "FK_da43b30d39d4bbe805dbab81905" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."jobs" ADD CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" ADD CONSTRAINT "FK_c79967e66f830de91ae5e2cf034" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" ADD CONSTRAINT "FK_b96b1d2e57097ca5c9c97603d91" FOREIGN KEY ("mainJobId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "raidProgress" ADD CONSTRAINT "FK_507b592ec2e385c652575c12bde" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "raidProgress" ADD CONSTRAINT "FK_e1038eb77e927e7b657eb777166" FOREIGN KEY ("volumeId") REFERENCES "volumes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."players" ADD CONSTRAINT "FK_9555c352d755d688c5de5ff2155" FOREIGN KEY ("worldId") REFERENCES "worlds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "public"."players" DROP CONSTRAINT "FK_9555c352d755d688c5de5ff2155"`)
    await queryRunner.query(`ALTER TABLE "raidProgress" DROP CONSTRAINT "FK_e1038eb77e927e7b657eb777166"`)
    await queryRunner.query(`ALTER TABLE "raidProgress" DROP CONSTRAINT "FK_507b592ec2e385c652575c12bde"`)
    await queryRunner.query(`ALTER TABLE "public"."profiles" DROP CONSTRAINT "FK_b96b1d2e57097ca5c9c97603d91"`)
    await queryRunner.query(`ALTER TABLE "public"."profiles" DROP CONSTRAINT "FK_c79967e66f830de91ae5e2cf034"`)
    await queryRunner.query(`ALTER TABLE "public"."jobs" DROP CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1"`)
    await queryRunner.query(`ALTER TABLE "public"."datacenters" DROP CONSTRAINT "FK_da43b30d39d4bbe805dbab81905"`)
    await queryRunner.query(`ALTER TABLE "public"."players" ALTER COLUMN "worldId" DROP NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "public"."players" ADD CONSTRAINT "FK_9555c352d755d688c5de5ff2155" FOREIGN KEY ("worldId") REFERENCES "worlds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(`ALTER TABLE "public"."profiles" ALTER COLUMN "mainJobId" DROP NOT NULL`)
    await queryRunner.query(`ALTER TABLE "public"."profiles" DROP CONSTRAINT "UQ_c79967e66f830de91ae5e2cf034"`)
    await queryRunner.query(
      `ALTER TABLE "public"."profiles" ADD CONSTRAINT "FK_b96b1d2e57097ca5c9c97603d91" FOREIGN KEY ("mainJobId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(`DROP INDEX "IDX_4a2ee6b469c5c0b5fa7733e591"`)
    await queryRunner.query(`DROP TABLE "raidProgress"`)
    await queryRunner.query(
      `ALTER TABLE "public"."jobs" ADD CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "public"."datacenters" ADD CONSTRAINT "FK_b0228d2150d3576c978f276e41a" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    )
  }
}
