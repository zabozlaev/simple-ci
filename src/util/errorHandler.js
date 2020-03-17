const httpStatusCodes = require("http-status-codes");

module.exports = async (req, reply, error) => {
  const { status = 500, message } = error;
  reply.status(500);
  reply.send({
    status,
    message: status == 500 ? httpStatusCodes.getStatusText(status) : message,
    path: req.req.url,
    created: new Date().toISOString()
  });
};
