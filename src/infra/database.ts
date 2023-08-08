import mongoose from 'mongoose';
export async function connectDatabase() {
    try {
        await mongoose.connect(
            'mongodb+srv://db_andersonlimacrv:YpUBSvxEGR1@cluster0.fsdfloa.mongodb.net/',);
        console.log("🚀 ~ Connect to Mongo Successfully!");
    } catch (error) {
        console.log("🚀 ~ file: database.ts:7 ~ connect ~ error", error);
    }
}
