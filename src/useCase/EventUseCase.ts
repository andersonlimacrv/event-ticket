import { Event } from "../entities/Event";
import { HttpException } from "../interfaces/HttpException";
import { EventRepository } from "../repositories/EventRepository";

class EventUseCase {
	constructor(private eventRepository: EventRepository) {}
	async create(eventData: Event) {
		if (!eventData.banner) {
			throw new HttpException(400, "Banner is required.");
		}
		if (!eventData.flyers) {
			throw new HttpException(400, "Flyers is required.");
		}
		if (!eventData.location) {
			throw new HttpException(400, "Location is required.");
		}

		const cityName = getCityByCordinates(
			eventData.location.latitude,
			eventData.location.longitude
		);

		const result = await this.eventRepository.add(eventData);
		return result;
	}
	private getCityByCordinates(latitude, longitude);
}

export { EventUseCase };
