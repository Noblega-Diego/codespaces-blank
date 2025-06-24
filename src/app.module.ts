import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { ClientsModule } from './clients/clients.module';
import { PetsModule } from './pets/pets.module';
import { PetImagesModule } from './pet-images/pet-images.module';
import { MedicalRecordsModule } from './medical-records/medical-records.module';
import { MedicalRecordFilesModule } from './medical-record-files/medical-record-files.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ServicesModule } from './services/services.module';
import { CouponsModule } from './coupons/coupons.module';

@Module({
  imports: [PrismaModule, ProductsModule, CategoriesModule, ClientsModule, PetsModule, PetImagesModule, MedicalRecordsModule, MedicalRecordFilesModule, AppointmentsModule, ServicesModule, CouponsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
