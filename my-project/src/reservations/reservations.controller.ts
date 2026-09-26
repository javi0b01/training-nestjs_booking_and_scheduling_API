import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReservationsService } from './reservations.service.js';
import { CreateReservationDto } from './dto/create-reservation.dto.js';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  findAll(): string {
    return this.reservationsService.findAll();
  }

  @Post()
  create(@Body() createReservationDto: CreateReservationDto): string {
    return `Reserva creada:\n${createReservationDto.guestName} - ${createReservationDto.reservationDate}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.reservationsService.findOne(id);
  }
}
