import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
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
  getOneNinja(@Param('id') id: string) {
    return this.ninjasService.getNinja(+id);
  }
  //POST /ninjas --> { ... }
  @Post()
  createNinja(@Body() body: CreateNinjaDto) {
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
