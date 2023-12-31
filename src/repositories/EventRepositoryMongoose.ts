import mongoose from "mongoose";
import { EventRepository } from "./EventRepository";
import { Event } from "../entities/Event";

const eventSchema = new mongoose.Schema({
	title: String,
	location: {
		latitude: String,
		longitude: String,
	},
	date: Date,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	description: String,
	categories: [String],
	banner: String,
	flyers: [String],
	price: {
		type: Array,
	},
	city: String,
	formattedAddress: String,
	participants: {
		type: Array,
		ref: "User",
	},
});

const EventModel = mongoose.model("Event", eventSchema);

class EventRepositoryMongoose implements EventRepository {
	async add(event: Event): Promise<Event> {
		const eventModel = new EventModel(event);

		await eventModel.save();
		return event;
	}
	async findByLocationAndDate(location: Location, date: Date) {
		const findEvent = await EventModel.findOne({
			location,
			date,
		}).exec();
		console.log(
			"🚀 ~ file: EventRepositoryMongoose.ts:49 ~ EventRepositoryMongoose ~ findEvent:",
			findEvent
		);
		return findEvent;
	}
}

export { EventRepositoryMongoose };
