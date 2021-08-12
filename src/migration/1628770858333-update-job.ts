import {MigrationInterface, QueryRunner} from "typeorm";

export class updateJob1628770858333 implements MigrationInterface {
    name = 'updateJob1628770858333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."job" ADD "shortName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."job" DROP COLUMN "shortName"`);
    }

}
