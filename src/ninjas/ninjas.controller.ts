import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BeltGuard } from 'src/belt/belt.guard';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
@UseGuards(BeltGuard)
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  //GET /ninjas --> []
  @Get()
  getNinjas(@Query('weapon') weapon?: 'stars' | 'sword' | 'katana') {
    // const service = new NinjasService();
    return this.ninjasService.getNinjas(weapon);
  }
  //GET /ninjas/:id --> { ... }
  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.getNinja(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
  //POST /ninjas --> { ... }
  @Post()
  createNinja(@Body(new ValidationPipe()) body: CreateNinjaDto) {
    return this.ninjasService.createNinja(body);
  }
  //PUT /ninjas/:id --> { ... }
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() body: CreateNinjaDto) {
    return this.ninjasService.updateNinja(+id, body);
  }
  //DELETE /ninjas/:id --> { ... }
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }
}
