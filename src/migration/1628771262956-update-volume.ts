import {MigrationInterface, QueryRunner} from "typeorm";

export class updateVolume1628771262956 implements MigrationInterface {
    name = 'updateVolume1628771262956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."volume" ADD "patchNum" numeric NOT NULL DEFAULT 0.0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."volume" DROP COLUMN "patchNum"`);
    }

}
