import { Column, Entity } from 'typeorm';

@Entity('HI_ADVISORIES_PIVOT')
export class Advisory {
  @Column({
    primary: true,
    type: 'varchar',
    length: 36,
    unique: true,
    name: 'HI_UUID',
    nullable: false,
  })
  id: string;

  @Column({ type: 'varchar', length: 36, name: 'MD5_VAL', nullable: false })
  hash: string;

  @Column({ type: 'decimal', precision: 8, name: 'PERSON_ID', nullable: true })
  personId: string;

  @Column({ type: 'varchar', length: 75, name: 'HI_REFERENCE_CD', nullable: false })
  healtheIntentReferenceCd: string;

  @Column({ type: 'varchar', length: 75, name: 'HI_REFERENCE_DISPLAY_TXT', nullable: true })
  healtheIntentReferenceDisplayText: string;

  @Column({ type: 'varchar', length: 75, name: 'HI_DUE_TXT', nullable: true })
  healtheIntentDueTxt: string;

  @Column({ type: 'timestamp', nullable: false, default: () => 'CURRENT_TIMESTAMP', name: 'RECORD_CREATE_DTS' })
  recordCreateDts: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'RECORD_UPDATE_DTS' })
  recordUpdateDts: Date;

  @Column({ type: 'timestamp', nullable: true, name: 'RECORD_DELETE_DTS' })
  recordDeleteDts: Date;
}
