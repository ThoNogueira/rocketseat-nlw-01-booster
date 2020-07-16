import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');

        const serializedItems = items.map(i => {
            return {
                id: i.id,
                title: i.title,
                image_url: i.image = `http://localhost:3333/uploads/${i.image}`
            };
        });

        return response.json(items);
    }
}

export default ItemsController;