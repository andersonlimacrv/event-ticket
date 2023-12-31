import axios from "axios";
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
		// Verification if an event already exists on the same date and location

		const cityName = await this.getCityByCordinates(
			eventData.location.latitude,
			eventData.location.longitude
		);
		eventData = {
			...eventData,
			city: cityName,
		};

		const result = await this.eventRepository.add(eventData);
		return result;
	}
	private async getCityByCordinates(latitude: string, longitude: string) {
		try {
			const response = await axios.get(
				`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.GOOGLE_MAPS_API_KEY}`
			);
			if (
				response.data.status === "OK" &&
				response.data.results.length > 0
			) {
				const address =
					response.data.results[0]
						.address_components;
				const cityType = address.find(
					(type: any) =>
						type.types.includes(
							"administrative_area_level_2"
						) &&
						type.types.includes("political")
				);
				return cityType.long_name;
			}
			throw new HttpException(404, "City not found.");
		} catch (error) {
			throw new HttpException(
				401,
				"Error request City name."
			);
		}
	}
}

export { EventUseCase };
