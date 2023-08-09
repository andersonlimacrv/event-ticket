import { App } from "../app";
import { Event } from "../entities/Event";
import request from "supertest";
import { describe, it, expect } from "@jest/globals";

const app = new App();
const express = app.app;

describe("Event Test", () => {
	it("/POST Event", async () => {
		const event: Event = {
			title: "Test",
			price: [
				{
					sector: "Pista",
					amount: "150",
				},
			],
			description: "descrição",
			city: "Pelotas RS  ",
			coupons: [],
			location: {
				latitude: "-31.7714156",
				longitude: "-52.3358456",
			},
			date: new Date(),
			participants: [],
			flyers: [],
			banner: "",
		};
		const response = await request(express)
			.post("/events")
			.field("title", event.title)
			.field("price[sector]", event.price[0].sector)
			.field("price[amount]", event.price[0].amount)
			.field("description", event.description)
			.field("city", event.city)
			.field("coupons", event.coupons)
			.field("location[latitude]", event.location.latitude)
			.field("location[longitude]", event.location.longitude)
			.attach("flyers", "/Users/ander/Downloads/flyer1.png")
			.attach("flyers", "/Users/ander/Downloads/flyer2.png")
			.attach("banner", "/Users/ander/Downloads/banner.png");

		if (response.error) {
			console.log(
				"🚀 ~ file: Event.test.ts:46 ~ it ~ response:",
				response.error
			);
		}

		expect(response.status).toBe(201);
		expect(response.body).toEqual({
			message: "Event created successfully!",
		});
	});
});
