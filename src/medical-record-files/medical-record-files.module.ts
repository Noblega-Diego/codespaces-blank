import { Module } from '@nestjs/common';
import { MedicalRecordFilesController } from './medical-record-files.controller';
import { MedicalRecordFilesService } from './medical-record-files.service';

@Module({
  controllers: [MedicalRecordFilesController],
  providers: [MedicalRecordFilesService]
})
export class MedicalRecordFilesModule {}
