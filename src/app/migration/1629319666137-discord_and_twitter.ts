import {MigrationInterface, QueryRunner} from "typeorm";

export class discordAndTwitter1629319666137 implements MigrationInterface {
    name = 'discordAndTwitter1629319666137'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."profiles" DROP COLUMN "canVoiceChat"`);
        await queryRunner.query(`ALTER TABLE "public"."profiles" ADD "twitterId" character varying(255)`);
        await queryRunner.query(`ALTER TABLE "public"."profiles" ADD "discordId" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."profiles" DROP COLUMN "discordId"`);
        await queryRunner.query(`ALTER TABLE "public"."profiles" DROP COLUMN "twitterId"`);
        await queryRunner.query(`ALTER TABLE "public"."profiles" ADD "canVoiceChat" boolean NOT NULL`);
    }

}
