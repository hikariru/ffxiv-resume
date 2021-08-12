import {MigrationInterface, QueryRunner} from "typeorm";

export class updateTablename1628799404658 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."datacenter" RENAME TO "datacenters"`);
        await queryRunner.query(`ALTER TABLE "public"."job" RENAME TO "jobs"`);
        await queryRunner.query(`ALTER TABLE "public"."raid" RENAME TO "raids"`);
        await queryRunner.query(`ALTER TABLE "public"."role" RENAME TO "roles"`);
        await queryRunner.query(`ALTER TABLE "public"."volume" RENAME TO "volumes"`);
        await queryRunner.query(`ALTER TABLE "public"."world" RENAME TO "worlds"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
