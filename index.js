import("./server/src/server.js").catch((error) => {
  console.error("Failed to start the server from the project root.");
  console.error(error);
  process.exit(1);
});
