/**
 *
 * so this is where you define the package details for CONNECT platform.
 * these details are confined to 'module.exports.platform', to allow for packages
 * that would work outside of the context of CONNECT platform as well.
 *
 */
module.exports.platform = {
  /**
   *
   * these are the configurations of your package.
   *
   */
  config: {
    /**
     *
     * these are the nodes introduced by your package.
     * you should specify the nodes your package offers based on
     * their type. node types can be one of the following:
     *
     * - native: i.e. nodes written in javascript.
     * - json: i.e. nodes generated by CONNECT platform itself.
     * - module: i.e. other CONNECT packages your package is dependant on. these can
     *          be included locally or can be external packages, in which case the platform
     *          will try to fetch and install them upon initialization.
     *
     */
    nodes : {
      /**
       *
       * reference native modules (and json modules as well) relative to root of your
       * package, without the extension.
       *
       */
      native : ['query']
    },
    /**
     *
     * aliases help you declare more generic addresses for your nodes.
     * for example, you might be aliasing '/firestore/insert' to '/db/insert',
     * so that other nodes and packages of the user will be using them without
     * being aware that 'db' is actually 'firestore'.
     *
     */
    aliases: {
      '/db/query': '/connect-postgres/query',
    }
  },
  hints: {
    setup:
  `Should work if you provide the correct configuration as shown below.<br>
  Otherwise, check the sample configuration below and <a href="https://node-postgres.com/features/connecting">this page</a> for a more detailled description on all the options.`,
  sampleConfig: {
      postgres: {
        user: 'dbuser',
        host: 'database.server.com',
        database: 'mydb',
        password: 'secretpassword',
        port: 3211,
      }
    }
  }
}
