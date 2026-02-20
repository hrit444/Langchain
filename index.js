import {config} from "dotenv"
import { ChatGoogle } from "@langchain/google";
import { PromptTemplate } from "@langchain/core/prompts";

config()

const model = new ChatGoogle({
  apiKey: process.env.GEMINI_API_KEY ,
  model: "gemini-2.5-flash",
});

const promptTemplate = PromptTemplate.fromTemplate(
  `Explain {topic} in simple terms (ELI5 style).
Cover only the core concepts. Be brief and direct.`
)

const chain = promptTemplate.pipe(model)

chain.invoke({topic: "node"})
.then(response => {
  console.log(response)
})