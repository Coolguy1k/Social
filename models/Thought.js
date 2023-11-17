const mongoose = require("mongoose");
const Reactions = require("./Reaction");
const dayjs = require("dayjs");

const thoughtSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    reactions: [Reactions],
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timeStamp) => {
        return dayjs(timeStamp).format("MMM D YYYY [at] h:mm A");
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model("thought", thoughtSchema);

module.exports = Thought;