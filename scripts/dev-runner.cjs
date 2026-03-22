const { spawn } = require("child_process");
const path = require("path");

const children = [];
const commands = [
  { name: "server", args: ["run", "server:start"] },
  { name: "client", args: ["run", "client:dev"] },
];

const getCommandConfig = (args) => {
  if (process.platform === "win32") {
    return {
      command: "cmd.exe",
      args: ["/c", "npm", ...args],
    };
  }

  return {
    command: "npm",
    args,
  };
};

const shutdown = (signal = "SIGTERM") => {
  for (const child of children) {
    if (!child.killed) {
      child.kill(signal);
    }
  }
};

for (const task of commands) {
  const commandConfig = getCommandConfig(task.args);

  const child = spawn(commandConfig.command, commandConfig.args, {
    cwd: path.resolve(__dirname, ".."),
    stdio: "inherit",
  });

  child.on("exit", (code) => {
    if (code && code !== 0) {
      console.error(`${task.name} exited with code ${code}`);
      shutdown();
      process.exitCode = code;
    }
  });

  children.push(child);
}

process.on("SIGINT", () => {
  shutdown("SIGINT");
  process.exit(0);
});

process.on("SIGTERM", () => {
  shutdown("SIGTERM");
  process.exit(0);
});
