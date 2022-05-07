import mongoose from "mongoose";
import { UserInfo } from "../interfaces/movie/MovieInfo";

const MovieSchema = new mongoose.Schema({
    writer: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    director: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Movie"
    },
    title: {
        type: String,
        require: true
    },
    content: {
        type: String
    }
});

export default mongoose.model<ReviewInfo & mongoose.Document>("Review", ReviewSchema);