import { getRepository, Repository, MoreThan, LessThan, MoreThanOrEqual } from "typeorm";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async listByUpdated(lastPulledVersion: number): Promise<Car[]> {
    const cars = await this.repository
    .createQueryBuilder()
    .where("updated_at >= :lastPulledVersion AND updated_at <> created_at",
    { lastPulledVersion })
    .getMany();     
    
    
    return cars;
  }

  async listByCreated(lastPulledVersion: number): Promise<Car[]> {
    const cars = await this.repository.find({
      created_at: MoreThan(lastPulledVersion)      
    });

    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne(id, {
      relations: ['photos', 'accessories']
    });

    return car;
  }

  async listAll(): Promise<Car[]> {
    const cars = await this.repository.find({
      relations: ['photos', 'accessories']
    })
    return cars;
  }


}

export { CarsRepository };
