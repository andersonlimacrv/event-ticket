import { Event } from "../entities/Event";

interface EventRepository {
	add(event: Event): Promise<Event>;
	findByLocationAndDate(location: Location, date: Date): Promise<void>;
}

export { EventRepository };
