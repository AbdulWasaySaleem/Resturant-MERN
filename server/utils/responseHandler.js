// utils/responseHandler.js
export const successResponse = (res, status = 200, data = {}, message = "Success") =>
  res.status(status).json({ success: true, message, data });

export const errorResponse = (res, status = 500, error = "Something went wrong") =>
  res.status(status).json({ success: false, error });

export const handleResponse = (res, status, data, message) =>
  successResponse(res, status, data, message);

export const handleError = (res, error, customMessage = "Internal Server Error", status = 500) => {
  console.error(customMessage, error);
  return errorResponse(res, status, customMessage);
};
