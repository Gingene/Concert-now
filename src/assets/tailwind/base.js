import plugin from "tailwindcss/plugin";

const theme = plugin;

export default {
  "*": { lineHeight: 1.5 },
  h1: { fontSize: theme("fontSize.3xl"), fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
  h2: { fontSize: theme("fontSize.2xl"), fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
  h3: { fontSize: theme("fontSize.xl"), fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
  h4: { fontSize: theme("fontSize.lg"), fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
  h5: { fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
  h6: { fontWeight: theme("fontWeight.bold"), lineHeight: 1.2 },
};
