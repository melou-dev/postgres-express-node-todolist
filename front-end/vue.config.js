module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/postgres-express-node-todolist/"
      : "/"
};
