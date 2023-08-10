import { NextFunction, Request, Response } from "express";
import { EventUseCase } from "../useCase/EventUseCase";
import { Event } from "../entities/Event";

class EventController {
	constructor(private eventUseCase: EventUseCase) {}
	async create(request: Request, response: Response, next: NextFunction) {
		let eventData: Event = request.body;
		const files = request.files as any;

		if (files) {
			const banner = files.banner[0];
			const flyers = files.flyers;

			eventData = {
				...eventData, // spread syntax" ou "rest operator" -> cria um novo objeto;
				banner: banner.filename,
				flyers: flyers.map(
					(flyer: any) => flyer.filename
				),
			};
		}
		try {
			await this.eventUseCase.create(eventData);
			return response.status(201).json({
				message: "Event created successfully!",
			});
		} catch (err) {
			next(err);
		}
	}
}

export { EventController };
