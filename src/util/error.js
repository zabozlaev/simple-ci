const httpStatusCodes = require("http-status-codes");

module.exports = class HttpError extends Error {
  constructor(
    status = httpStatusCodes.INTERNAL_SERVER_ERROR,
    message = httpStatusCodes.getStatusText(status)
  ) {
    super(message);
    this.status = status;
  }
};
