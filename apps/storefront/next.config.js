module.exports = {
  poweredByHeader: false,
  generateBuildId: async () => {
    return process.env.npm_package_version;
  },
};
