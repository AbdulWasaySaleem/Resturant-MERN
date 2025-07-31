const getErrorMessage = (error) =>
  error.response?.data?.error || error.response?.data?.message || error.message || "Something went wrong!";

export default getErrorMessage;