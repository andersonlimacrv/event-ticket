import mongoose from "mongoose";
export async function connectDatabase() {
	try {
		// mongodb://localhost:27017/ 'mongodb+srv://db_andersonlimacrv:YpUBSvxEGR1@cluster0.fsdfloa.mongodb.net/'
		await mongoose.connect("mongodb://localhost:27017/");
		console.log("🚀 ~ Connect to Mongo Successfully!");
	} catch (error) {
		console.log(
			"🚀 ~ file: database.ts:7 ~ connect ~ error",
			error
		);
	}
}
