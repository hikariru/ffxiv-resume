import {MigrationInterface, QueryRunner} from "typeorm";

export class updateVolume1628771812391 implements MigrationInterface {
    name = 'updateVolume1628771812391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."volume" DROP COLUMN "patchNum"`);
        await queryRunner.query(`ALTER TABLE "public"."volume" ADD "patchNum" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."volume" DROP COLUMN "patchNum"`);
        await queryRunner.query(`ALTER TABLE "public"."volume" ADD "patchNum" numeric NOT NULL DEFAULT 0.0`);
    }

}
