import { getRepository, Repository, MoreThan } from "typeorm";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async listByUpdated(lastPulledVersion: number): Promise<Car[]> {
    const cars = await this.repository.find({
      updated_at: MoreThan(lastPulledVersion)
    });

    return cars;
  }

  async listByCreated(lastPulledVersion: number): Promise<Car[]> {
    const cars = await this.repository.find({
      created_at: MoreThan(lastPulledVersion)
    });

    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne(id);

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
