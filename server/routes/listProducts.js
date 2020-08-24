module.exports = (app, wooApi) => {
  app.get("/api/v1/listProducts", async (req, res) => {
    try {
      const products = await wooApi.get("products");
      res.status(200).send(products.data);
    } catch (error) {
      res.status(500).send(error);
    }
  });
};
