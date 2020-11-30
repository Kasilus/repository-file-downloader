module.exports = {
    url: 'www.site.com/path/to/resource',
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
      },
      {
        name: "module_only",
        version: "12.3.3.1",
        submodules: [
          ""
        ]
      }
  ]
}
