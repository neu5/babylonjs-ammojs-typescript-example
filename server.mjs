import { fileURLToPath } from "url";
import { resolve } from "path";
import express from "express";
import { createServer } from "http";

const getDirname = (meta) => fileURLToPath(meta.url);
const rootDir = getDirname(import.meta);
const distDir = resolve(rootDir, "..","public");

console.log(distDir);

const app = express();
const httpServer = createServer(app);

app.use(express.static(distDir));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: distDir });
});

export const server = httpServer.listen(process.env.PORT || 5000);
