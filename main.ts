const { args } = Deno;
import { parse } from "https://deno.land/std/flags/mod.ts";
import {
  bold,
  brightBlue,
  brightGreen,
  brightYellow,
} from "https://deno.land/std/fmt/colors.ts";
import { wait } from "https://deno.land/x/wait/mod.ts";

const spinner = wait("Generating Words").start();
const BASE_URL: string = "https://san-random-words.vercel.app/";
const parsedArgs = parse(args);

async function getRandomwords() {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  const word = brightBlue(`${bold("Word:")} ${data[0].word}`);
  const definition = brightGreen(
    `${bold("Definition:")} ${data[0].definition}`,
  );
  const pronunciation = brightYellow(
    `${bold("Pronunciation:")} ${data[0].pronunciation}`,
  );
  spinner.stop();
  console.log(word + "\n" + definition + "\n" + pronunciation);
}

async function getPronunciation(Pronunciation: string) {
  const cleanPronounce = Pronunciation;
  if (cleanPronounce) {
    const res = await fetch(`${BASE_URL}api/${cleanPronounce}`);
    const data = await res.json();
    const getPronounce = data;
    if (data === "true") {
      spinner.stop();
      console.log("Enter a Any Word to Get Pronunciation -", "Hello World");
    } else {
      spinner.stop();
      console.log(getPronounce);
    }
  } else {
    spinner.stop();
    console.log("API Error");
  }
}

function displayHelpMsg() {
  spinner.stop();
  return "flags:\n-h, --help: display help message\n-r, --random: Get Random Words with with pronunciation\n-p, --pronunciation: Get pronunciation for a Word";
}
async function main() {
  switch (Object.keys(parsedArgs)[1]) {
    case "help":
    case "h":
      console.log(displayHelpMsg());
      break;
    case "random":
    case "r":
      await getRandomwords();
      break;
    case "pronunciation":
    case "p":
      let Pronunciation = parsedArgs.p || parsedArgs.Pronunciation ||
        "automation";
      await getPronunciation(Pronunciation);
      break;
    default:
      console.log(displayHelpMsg());
  }
}

main();
