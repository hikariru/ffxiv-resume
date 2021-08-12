import {MigrationInterface, QueryRunner} from "typeorm";

export class init1628801116948 implements MigrationInterface {
    name = 'init1628801116948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "worlds" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "datacenterId" integer, CONSTRAINT "PK_8b447f7a2b28d3567db893ae7a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "datacenters" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_844148292b0ddec4e012044135c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "jobs" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "shortName" character varying NOT NULL, "roleId" integer, CONSTRAINT "PK_cf0a6c42b72fcc7f7c237def345" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "volumes" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "patchNum" character varying NOT NULL, "raidId" integer, CONSTRAINT "PK_f3d03a6ad79006b028d3eae9e9f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "raids" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_8127a074d4225c32f9fc6e2f2a5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "worlds" ADD CONSTRAINT "FK_ad237c57ba1070b53b0c6e8bbba" FOREIGN KEY ("datacenterId") REFERENCES "datacenters"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "jobs" ADD CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "volumes" ADD CONSTRAINT "FK_0f991946810a58f1301f1f7297d" FOREIGN KEY ("raidId") REFERENCES "raids"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "volumes" DROP CONSTRAINT "FK_0f991946810a58f1301f1f7297d"`);
        await queryRunner.query(`ALTER TABLE "jobs" DROP CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1"`);
        await queryRunner.query(`ALTER TABLE "worlds" DROP CONSTRAINT "FK_ad237c57ba1070b53b0c6e8bbba"`);
        await queryRunner.query(`DROP TABLE "raids"`);
        await queryRunner.query(`DROP TABLE "volumes"`);
        await queryRunner.query(`DROP TABLE "jobs"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "datacenters"`);
        await queryRunner.query(`DROP TABLE "worlds"`);
    }

}
