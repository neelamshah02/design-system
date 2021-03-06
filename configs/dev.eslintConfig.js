module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended"
  ],
  plugins: ["react-hooks"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    },
    extraFileExtensions: [".json"],
    project: "./tsconfig.json"
  },
  ignorePatterns: [
    // Build and Packages
    "/node_modules/**",
    "/lib/**",
    "/build/**",
    // Test files
    "/**/*.test.tsx",
    "/**/*.test.ts",
    "/**/*.test.jsx",
    "/**/*.test.js",
    "/coverage/**",
    // Ignore specific files
    "/**/package.json",
    "/**/serviceWorker.ts",
    "/**/webpack.config.js",
    "/**/tsconfig.js",
    "/**/lib.tsconfig.js",
    "/**/.DS_STORE",
    "/**/.env",
    // Log Files
    "/**/npm-debug.log*",
    "/**/yarn-debug.log*",
    "/**/yarn-error.log*",
    // Unsupported files
    "*.eot",
    "*.svg",
    "*.ttf",
    "*.woff",
    "*.png",
    "*.jpeg",
    "*.md",
    "*.pnp",
    "*.js.pnp",
    // Stylings
    "*.css",
    "*.scss"
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "@typescript-eslint/interface-name-prefix": "off", //Should interfaces have a name Prefix
    "react/prop-types": "off", // deactivate reacts prop types. We use typescript instead
    "react/require-default-props": "error", // deactivate reacts default props
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/explicit-function-return-type": "off", // Defined functions should define return type?
    "@typescript-eslint/no-empty-function": "off", // No empty functions
    "@typescript-eslint/no-use-before-define": "off", // Use code before define
    "@typescript-eslint/no-explicit-any": "off", // Is "any" type acceptable at all?
    "@typescript-eslint/no-unused-vars": "error", // Declared variabled is not used
    "@typescript-eslint/array-type": "error", // No dead code
    "@typescript-eslint/no-extra-non-null-assertion": "error", // Prevents use of extra non-null assertion
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error", // Prevents use non-null assertion in optional chaining
    "@typescript-eslint/prefer-optional-chain": "error", // Prefer optional chaining over && expressions
    "@typescript-eslint/require-array-sort-compare": "error", // If use of sort(), compare function required
    "@typescript-eslint/default-param-last": "error", // optional and or default should be last
    "no-unused-expressions": "off", // default has to be off for next rule to work
    "@typescript-eslint/no-unused-expressions": "off", // No unused expressions (dead code) → Turned off due to && expressions errors
    "@typescript-eslint/camelcase": "off", // default has to be off for the next rule to work
    "@typescript-eslint/naming-convention": [
      // Setting default naming conventions
      "error",
      {
        selector: "default",
        format: ["camelCase"]
      },

      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"]
      },
      {
        selector: "parameter",
        format: ["camelCase"],
        leadingUnderscore: "allow"
      },

      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require"
      },
      {
        selector: "enum",
        format: ["PascalCase"]
      },
      {
        selector: "enumMember",
        format: ["camelCase", "PascalCase"]
      },
      {
        selector: "typeLike",
        format: ["PascalCase"]
      }
    ]
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};
