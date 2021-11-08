import { getCustomRepository } from "typeorm"
import { Instance } from "../../entities/Instance"
import { InstanceRepository } from "../../repositories/InstanceRepository"

interface IInstance {
  url: string,
  photo: Object,
}

class CreateInstanceService {

  async execute({url, photo}:IInstance): Promise<Instance>{
    const instanceRepository = getCustomRepository(InstanceRepository)

    const instanceExists = await instanceRepository.findOne({
      url,
      photo
    })

    if(instanceExists){
      throw new Error("Instance already exists")
    }

    const instance = instanceRepository.create({
      url,
      photo
    })

    await instanceRepository.save(instance)

    return instance
  }
}

export {CreateInstanceService}