// reducer.tsx
const likeReducer = (
  state = {
    likes: JSON.parse(localStorage.getItem("likedProducts") || "[]") || [],
  },
  action
) => {
  switch (action.type) {
    case "like_product":
      // Action dan product ma'lumotini olamiz
      const { product } = action;
      // Oldingi likes ni ko'chirib yuboramiz va yangi product ni qo'shamiz

      const updatedLikes = [...state.likes, product];
      localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
      return {
        ...state,
        likes: updatedLikes,
      };
    default:
      return state;
  }
};

export { likeReducer };
