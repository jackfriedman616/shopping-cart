resolve: {
    // Other resolve options...
    fallback: {
      "assert": require.resolve("assert/"),
      "path": require.resolve("path-browserify"),
      "fs": false;
    }
  }
  