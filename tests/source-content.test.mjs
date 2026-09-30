import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const contentUrl = new URL("../app/site-content.ts", import.meta.url);

test("keeps the public profile grounded in the supplied listing", async () => {
  const source = await readFile(contentUrl, "utf8");

  assert.match(source, /name:\s*"Biplab Das"/);
  assert.match(source, /qualification:\s*"LLB"/);
  assert.match(source, /established:\s*"1968"/);
  assert.match(source, /openingTime:\s*"7:00 PM"/);
  assert.match(source, /Dhanbad\s*[–-]\s*826001, Jharkhand/);
  assert.match(source, /Accident Claims/);
});

test("keeps unverified contact details in a safe placeholder state", async () => {
  const source = await readFile(contentUrl, "utf8");

  assert.match(source, /phoneStatus:\s*"awaiting-confirmation"/);
  assert.match(source, /whatsappStatus:\s*"awaiting-confirmation"/);
  assert.doesNotMatch(source, /(?:tel:|wa\.me|success rate|guaranteed compensation|award-winning|₹\s*\d)/i);
});
