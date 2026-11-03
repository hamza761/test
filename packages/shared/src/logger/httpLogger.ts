import { pinoHttp } from "pino-http";
import logger from "./logger.js";

export default pinoHttp({ logger });