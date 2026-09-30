import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(path, import.meta.url), "utf8");

test("renders the complete semantic legal landing page", async () => {
  const page = await read("../app/page.tsx");

  assert.match(page, /<header/);
  assert.match(page, /<main/);
  assert.match(page, /<footer/);
  assert.match(page, /Injured in an accident\?/);
  for (const id of ["services", "process", "about", "faqs", "contact"]) {
    assert.match(page, new RegExp(`id=["']${id}["']`));
  }
  assert.match(page, /officeDetails\.address/);
  assert.match(page, /officeDetails\.directionsUrl/);
  assert.match(page, /practiceAreas\.map/);
  assert.match(page, /faqs\.map/);
  assert.doesNotMatch(page, /testimonial|case results|success rate/i);
});

test("keeps placeholder contact actions inert and explicit", async () => {
  const page = await read("../app/page.tsx");

  assert.match(page, /Phone awaiting confirmation/);
  assert.match(page, /WhatsApp awaiting confirmation/);
  assert.doesNotMatch(page, /href=["'](?:tel:|https:\/\/wa\.me)/i);
});

test("defines responsive, focus-visible and reduced-motion styles", async () => {
  const css = await read("../app/globals.css");

  assert.match(css, /:focus-visible/);
  assert.match(css, /@media\s*\(max-width:\s*720px\)/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
  assert.match(css, /scroll-behavior:\s*auto/);
  assert.match(css, /\.mobile-contact-bar/);
});

test("keeps section navigation available on mobile", async () => {
  const [page, css] = await Promise.all([
    read("../app/page.tsx"),
    read("../app/globals.css"),
  ]);

  assert.match(page, /className="mobile-nav"/);
  assert.match(page, /aria-label="Mobile section navigation"/);
  for (const target of ["#services", "#process", "#about", "#faqs", "#contact"]) {
    assert.match(page, new RegExp(`href=["']${target}["']`));
  }
  assert.match(css, /\.mobile-nav\s*\{[^}]*display:\s*none/s);
  assert.match(css, /@media\s*\(max-width:\s*720px\)[\s\S]*\.mobile-nav\s*\{[^}]*display:\s*flex/s);
});

test("uses client-specific metadata and removes starter preview markers", async () => {
  const [layout, page] = await Promise.all([
    read("../app/layout.tsx"),
    read("../app/page.tsx"),
  ]);

  assert.match(layout, /Advocate Biplab Das \| Accident Claim Assistance in Dhanbad/);
  assert.doesNotMatch(`${layout}\n${page}`, /codex-preview|SkeletonPreview|Starter Project/);
});
