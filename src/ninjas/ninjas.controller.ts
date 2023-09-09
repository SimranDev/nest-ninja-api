import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  //GET /ninjas --> []
  @Get()
  getNinjas() {
    return [];
  }
  //GET /ninjas/:id --> { ... }
  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }
  //POST /ninjas --> { ... }
  @Post()
  createNinja(@Body() body: CreateNinjaDto) {
    return {
      name: body.name,
    };
  }
  //PUT /ninjas/:id --> { ... }
  @Put(':id')
  updateNinja() {
    return {};
  }
  //DELETE /ninjas/:id --> { ... }
  @Delete(':id')
  deleteNinja() {
    return {};
  }
}
