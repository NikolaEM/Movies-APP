import * as Yup from "yup";

export const createCommentSchema = Yup.object({
  content: Yup.string()
    .max(500, "Comment must be 500 characters or less!")
    .required("You can't post an empty comment!"),
});
