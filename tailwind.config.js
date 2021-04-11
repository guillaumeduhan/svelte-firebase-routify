const production = !process.env.ROLLUP_WATCH;

module.exports = {
  theme: {
    minWidth: {
      '16': '16rem',
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production,
  },
};