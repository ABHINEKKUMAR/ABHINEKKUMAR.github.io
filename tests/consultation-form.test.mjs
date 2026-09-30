import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validateConsultation } from "../app/consultation-validation.ts";

const blank = { name: "", phone: "", matter: "", message: "" };

test("rejects empty and whitespace-only consultation fields", () => {
  const errors = validateConsultation({
    name: "   ",
    phone: "   ",
    matter: "",
    message: "\n ",
  });

  assert.deepEqual(errors, {
    name: "Please enter your name.",
    phone: "Please enter a valid phone number with at least 10 digits.",
    matter: "Please select a matter type.",
    message: "Please add a short description.",
  });
});

test("rejects a phone value containing fewer than ten digits", () => {
  const errors = validateConsultation({
    ...blank,
    name: "Amit Kumar",
    phone: "12345",
    matter: "Accident Claims",
    message: "Road accident documents need review.",
  });

  assert.equal(errors.phone, "Please enter a valid phone number with at least 10 digits.");
});

test("accepts a complete consultation request", () => {
  const errors = validateConsultation({
    name: "Amit Kumar",
    phone: "+91 98765 43210",
    matter: "Accident Claims",
    message: "Road accident documents need review.",
  });

  assert.deepEqual(errors, {});
});

test("keeps submission local and exposes accessible status wiring", async () => {
  const source = await readFile(
    new URL("../app/ConsultationForm.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /preventDefault\(\)/);
  assert.match(source, /No information was sent or stored/);
  assert.match(source, /role="status"/);
  assert.match(source, /aria-describedby/);
  assert.doesNotMatch(source, /\bfetch\s*\(|localStorage|sessionStorage|action=/);
});
