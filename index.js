import {config} from "dotenv"
import { ChatGoogle } from "@langchain/google";

config()

const model = new ChatGoogle({
  apiKey: process.env.GEMINI_API_KEY ,
  model: "gemini-2.5-flash",
});

const res = await model.invoke("who are you ?");

console.log(res);
