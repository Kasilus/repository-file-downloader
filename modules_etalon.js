module.exports = {
    modules: [
    {
      name: "io",
      version: "1.0.5",
      submodules: [
        "common-api",
        "reader",
        "writer"
      ]
    },
    {
      name: "processing",
      version: "3.2.0.1",
      submodules: [
        "comparison",
        "acceleration",
        "simplification"
      ]
    },
    {
      name: "validation",
      version: "0.0.5-SNAPSHOT",
      submodules: [
        "structure-checking",
        "error-handling"
      ]
    }
  ]
}
