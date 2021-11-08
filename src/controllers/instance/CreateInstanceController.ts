import { Request, Response } from "express";
import { CreateInstanceService } from "../../services/instance/CreateInstanceService";

class CreateInstanceController {

  async handleCreate(request: Request, response: Response): Promise<Response>{
    const { url } = request.params
    const { photo } = request.body

    const createInstanceService = new CreateInstanceService
    
    const instance = await createInstanceService.execute({
      url,
      photo
    })

    return response.json({instance, message: "Photo instance created successfully" })

  }
}

export { CreateInstanceController }