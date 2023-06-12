import { Schema, model, Document } from "mongoose";

interface IQuestion extends Document {
  id: string;
  name: string;
  profileImage: string;
  checkedBadge: string;
  title: string;
  content: string;
  likeIds: String[];
  commentIds: Schema.Types.ObjectId[];
}

const QuestionSchema = new Schema<IQuestion>(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      // required: true,
    },
    checkedBadge: {
      type: String,
      default: "신규",
      enum: ["최초", "연속", "신규", "텀블", "교통", "버켓", "커뮤"],
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likeIds: [
      {
        type: String,
        ref: "User",
      },
    ],
    // 댓글 참조하는 배열
    commentIds: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true },
);

export default model<IQuestion>("Question", QuestionSchema);
