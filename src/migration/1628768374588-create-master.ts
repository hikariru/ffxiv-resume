import {MigrationInterface, QueryRunner} from "typeorm";

export class createMaster1628768374588 implements MigrationInterface {
    name = 'createMaster1628768374588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "world" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "datacenterId" integer, CONSTRAINT "PK_9a0e469d5311d0d95ce1202c990" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "datacenter" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b5f8994192387ab0f58dc1b1616" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "job" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "roleId" integer, CONSTRAINT "PK_98ab1c14ff8d1cf80d18703b92f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "volume" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "raidId" integer, CONSTRAINT "PK_666025cd0c36727216bb7f2a680" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "raid" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_ebce8d1093ed11aa478362133a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "world" ADD CONSTRAINT "FK_f7465216abb99f04873b829c883" FOREIGN KEY ("datacenterId") REFERENCES "datacenter"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job" ADD CONSTRAINT "FK_4ba0d6ac1cc2f9a8b02533b9afa" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "volume" ADD CONSTRAINT "FK_58dabaf2c65562647002f096fb7" FOREIGN KEY ("raidId") REFERENCES "raid"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "volume" DROP CONSTRAINT "FK_58dabaf2c65562647002f096fb7"`);
        await queryRunner.query(`ALTER TABLE "job" DROP CONSTRAINT "FK_4ba0d6ac1cc2f9a8b02533b9afa"`);
        await queryRunner.query(`ALTER TABLE "world" DROP CONSTRAINT "FK_f7465216abb99f04873b829c883"`);
        await queryRunner.query(`DROP TABLE "raid"`);
        await queryRunner.query(`DROP TABLE "volume"`);
        await queryRunner.query(`DROP TABLE "job"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "datacenter"`);
        await queryRunner.query(`DROP TABLE "world"`);
    }

}
