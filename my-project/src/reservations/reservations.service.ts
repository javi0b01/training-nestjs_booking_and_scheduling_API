import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ReservationsService {
  findAll(): string {
    return 'Lista de todas las reservas';
  }
  findOne(id: string): string {
    if (id === '0')
      throw new NotFoundException('La reserva con ID 0 no fue encontrada');
    return `Retornando la reserva con ID: ${id}`;
  }
  remove(id: string): void {
    console.log(`Reserva ${id} eliminada`);
  }
}
