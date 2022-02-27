import { Category } from './../entities/Category';
import { Video } from './../entities/Video';
import { getRepository } from 'typeorm';

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
}

export class CreateVideoService {
    async execute({ name, description,duration,category_id }: VideoRequest): Promise<Video | Error> {
        const repoCategory = getRepository(Category);
        const repo = getRepository(Video);

        if (!await repoCategory.findOne({id: category_id})) {
          return new Error(`Category does not exists`);
        }
        if (await repo.findOne({name: name})) {
            return new Error(`Video already exists`);
        }

        const video = repo.create({
            name,
            description,
            duration,
            category_id
        });

        await repo.save(video);

        return video
    }
}
