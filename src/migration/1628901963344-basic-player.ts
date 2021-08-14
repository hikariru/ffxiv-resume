import {MigrationInterface, QueryRunner} from "typeorm";

export class basicPlayer1628901963344 implements MigrationInterface {
    name = 'basicPlayer1628901963344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."worlds" DROP CONSTRAINT "FK_ad237c57ba1070b53b0c6e8bbba"`);
        await queryRunner.query(`ALTER TABLE "public"."jobs" DROP CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1"`);
        await queryRunner.query(`ALTER TABLE "public"."volumes" DROP CONSTRAINT "FK_0f991946810a58f1301f1f7297d"`);
        await queryRunner.query(`CREATE TABLE "profiles" ("playerId" integer NOT NULL, "activeTime" character varying, "canVoiceChat" boolean NOT NULL, "description" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "mainJobId" integer, CONSTRAINT "REL_c79967e66f830de91ae5e2cf03" UNIQUE ("playerId"), CONSTRAINT "PK_c79967e66f830de91ae5e2cf034" PRIMARY KEY ("playerId"))`);
        await queryRunner.query(`CREATE TABLE "players" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "characterId" integer NOT NULL, "password" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "worldId" integer, CONSTRAINT "PK_de22b8fdeee0c33ab55ae71da3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."worlds" ADD CONSTRAINT "FK_ad237c57ba1070b53b0c6e8bbba" FOREIGN KEY ("datacenterId") REFERENCES "datacenters"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "public"."jobs" ADD CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."volumes" ADD CONSTRAINT "FK_0f991946810a58f1301f1f7297d" FOREIGN KEY ("raidId") REFERENCES "raids"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "FK_c79967e66f830de91ae5e2cf034" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "profiles" ADD CONSTRAINT "FK_b96b1d2e57097ca5c9c97603d91" FOREIGN KEY ("mainJobId") REFERENCES "jobs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "players" ADD CONSTRAINT "FK_9555c352d755d688c5de5ff2155" FOREIGN KEY ("worldId") REFERENCES "worlds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "players" DROP CONSTRAINT "FK_9555c352d755d688c5de5ff2155"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "FK_b96b1d2e57097ca5c9c97603d91"`);
        await queryRunner.query(`ALTER TABLE "profiles" DROP CONSTRAINT "FK_c79967e66f830de91ae5e2cf034"`);
        await queryRunner.query(`ALTER TABLE "public"."volumes" DROP CONSTRAINT "FK_0f991946810a58f1301f1f7297d"`);
        await queryRunner.query(`ALTER TABLE "public"."jobs" DROP CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1"`);
        await queryRunner.query(`ALTER TABLE "public"."worlds" DROP CONSTRAINT "FK_ad237c57ba1070b53b0c6e8bbba"`);
        await queryRunner.query(`DROP TABLE "players"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`ALTER TABLE "public"."volumes" ADD CONSTRAINT "FK_0f991946810a58f1301f1f7297d" FOREIGN KEY ("raidId") REFERENCES "raids"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "public"."jobs" ADD CONSTRAINT "FK_a4a02d841e6e6698aaea99ea0a1" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "public"."worlds" ADD CONSTRAINT "FK_ad237c57ba1070b53b0c6e8bbba" FOREIGN KEY ("datacenterId") REFERENCES "datacenters"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
