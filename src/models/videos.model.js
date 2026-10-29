import mongoose , { Schema } from 'mongoose';
import mongooseAgregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
    },

    thumbnail:{
        type: String,
        required: true,
    },

    description:{
        type: String,
        required: true,
      
    },

    owner:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    duration:{
        type: Number,
    },

    views:{
        type: Number,
        default: 0
    },

    videoFile:{
        type: String,
        required: true,
    },

    isPublished:{
        type: Boolean,
        default: false,
    }

},{
    timestamps: true,
})


videoSchema.plugin(mongooseAgregatePaginate)

export const Video = mongoose.model('Video', videoSchema)