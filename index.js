const Openai = require("openai");

const openai = new Openai({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "" }],
  });
  console.log(response.choices[0].message.content);
}

main();
