module.exports = {
  transpileDependencies: ["vuetify", "vuex-persist"],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: ["/", "/about", "/test"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
};
