import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1628904847360 implements MigrationInterface {
  name = 'init1628904847360'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "worlds" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "datacenterId" integer, CONSTRAINT "PK_8b447f7a2b28d3567db893ae7a6" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "datacenters" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "datacenterId" integer, CONSTRAINT "PK_844148292b0ddec4e012044135c" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "countries" ("id" SERIAL NOT NULL, "countryCode" character varying(255) NOT NULL, CONSTRAINT "PK_b2d7006793e8697ab3ae2deff18" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "jobs" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "shortName" character varying(255) NOT NULL, "roleId" integer, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "volumes" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "patchNum" character varying(255) NOT NULL, "raidId" integer, CONSTRAINT "PK_f3d03a6ad79006b028d3eae9e9f" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "raids" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, CONSTRAINT "PK_8127a074d4225c32f9fc6e2f2a5" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "profiles" ("playerId" integer NOT NULL, "activeTime" character varying(255), "canVoiceChat" boolean NOT NULL, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "mainJobId" integer, CONSTRAINT "PK_c79967e66f830de91ae5e2cf034" PRIMARY KEY ("playerId"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "players" ("id" SERIAL NOT NULL, "firstName" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "characterId" integer NOT NULL, "password" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "worldId" integer, CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "worlds" ADD CONSTRAINT "FK_ad237c57ba1070b53b0c6e8bbba" FOREIGN KEY ("datacenterId") REFERENCES "datacenters"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "datacenters" ADD CONSTRAINT "FK_b0228d2150d3576c978f276e41a" FOREIGN KEY ("datacenterId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "jobs" ADD CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "volumes" ADD CONSTRAINT "FK_0f991946810a58f1301f1f7297d" FOREIGN KEY ("raidId") REFERENCES "raids"("id") ON DELETE NO ACTION ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "profiles" ADD CONSTRAINT "FK_b96b1d2e57097ca5c9c97603d91" FOREIGN KEY ("mainJobId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "players" ADD CONSTRAINT "FK_9555c352d755d688c5de5ff2155" FOREIGN KEY ("worldId") REFERENCES "worlds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "FK_9555c352d755d688c5de5ff2155"`)
    await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "FK_b96b1d2e57097ca5c9c97603d91"`)
    await queryRunner.query(`ALTER TABLE "volumes" DROP CONSTRAINT "FK_0f991946810a58f1301f1f7297d"`)
    await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1"`)
    await queryRunner.query(`ALTER TABLE "datacenters" DROP CONSTRAINT "FK_b0228d2150d3576c978f276e41a"`)
    await queryRunner.query(`ALTER TABLE "worlds" DROP CONSTRAINT "FK_ad237c57ba1070b53b0c6e8bbba"`)
    await queryRunner.query(`DROP TABLE "players"`)
    await queryRunner.query(`DROP TABLE "profiles"`)
    await queryRunner.query(`DROP TABLE "raids"`)
    await queryRunner.query(`DROP TABLE "volumes"`)
    await queryRunner.query(`DROP TABLE "jobs"`)
    await queryRunner.query(`DROP TABLE "roles"`)
    await queryRunner.query(`DROP TABLE "countries"`)
    await queryRunner.query(`DROP TABLE "datacenters"`)
    await queryRunner.query(`DROP TABLE "worlds"`)
  }
}
