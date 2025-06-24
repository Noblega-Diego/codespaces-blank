import { Module } from '@nestjs/common';
import { PetImagesController } from './pet-images.controller';
import { PetImagesService } from './pet-images.service';

@Module({
  controllers: [PetImagesController],
  providers: [PetImagesService]
})
export class PetImagesModule {}
