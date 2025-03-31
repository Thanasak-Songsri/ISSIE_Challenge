import { Test, TestingModule } from '@nestjs/testing';
import { RiderController } from './rider.controller';
import { RiderService } from './rider.service';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { CreateLocationDto } from './dto/create-location.dto';

describe('RiderController', () => {
  let riderController: RiderController;
  let riderService: RiderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiderController],
      providers: [
        {
          provide: RiderService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findRidersWithinRadius: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
            findRiderLocation: jest.fn(),
            CreateRiderLocation: jest.fn(),
          },
        },
      ],
    }).compile();

    riderController = module.get<RiderController>(RiderController);
    riderService = module.get<RiderService>(RiderService);
  });

  it('should be defined', () => {
    expect(riderController).toBeDefined();
  });

  describe('create', () => {
    it('should create a new rider', async () => {
      const createRiderDto: CreateRiderDto = { firstName: 'Mano',lastName: 'Polking',email:'mano@gmail.com',licensePlate:'XYZ-5555',phoneNumber:"0987654645"};
      const result = { id: 1, ...createRiderDto ,createdAt: new Date(),updatedAt: new Date()};

      jest.spyOn(riderService, 'create').mockResolvedValue(result);

      expect(await riderController.create(createRiderDto)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of riders', async () => {
      const result = [{ id: 1, firstName: 'John Doe', lastName: 'John Doe',email: 'john@gmail.com',licensePlate: 'XYZ-5555',phoneNumber: '089789798',createdAt: new Date(), updatedAt: new Date()}];
      jest.spyOn(riderService, 'findAll').mockResolvedValue(result);

      expect(await riderController.findAll()).toBe(result);
    });
  });


  describe('findOne', () => {
    it('should return a rider by ID', async () => {
      const result = { id: 1, firstName: 'John Doe', lastName: 'John Doe',email: 'john@gmail.com',licensePlate: 'XYZ-5555',phoneNumber: '089789798',createdAt: new Date(), updatedAt: new Date()};
      jest.spyOn(riderService, 'findOne').mockResolvedValue(result);

      expect(await riderController.findOne('1')).toBe(result);
    });
  });
});
