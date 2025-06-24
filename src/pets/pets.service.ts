import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePetDto) {
    return this.prisma.pet.create({ data });
  }

  async findAll() {
    return this.prisma.pet.findMany({ where: { deleted: false }, include: { images: true, medicalRecords: true, appointments: true, client: true } });
  }

  async findOne(id: number) {
    const pet = await this.prisma.pet.findUnique({ where: { id, deleted: false }, include: { images: true, medicalRecords: true, appointments: true, client: true } });
    if (!pet) throw new NotFoundException('Mascota no encontrada');
    return pet;
  }

  async update(id: number, data: UpdatePetDto) {
    await this.findOne(id);
    return this.prisma.pet.update({ where: { id }, data });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pet.update({ where: { id }, data: { deleted: true } });
  }
}
