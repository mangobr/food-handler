import { EntityRepository, Repository } from "typeorm";
import { Instance } from "../entities/Instance";


@EntityRepository(Instance)
class InstanceRepository extends Repository<Instance>{
    
}

export { InstanceRepository }