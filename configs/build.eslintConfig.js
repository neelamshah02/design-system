module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended"
  ],
  plugins: ["react-hooks"],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    project: ["./tsconfig.lib.json"],
    extraFileExtensions: [".json"]
  },
  rules: {
    "no-console": ["error", { allow: ["warn", "error", "info"] }]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
