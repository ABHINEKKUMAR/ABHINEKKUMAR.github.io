"use client";

import { useState, type FormEvent } from "react";
import { practiceAreas } from "./site-content";
import {
  validateConsultation,
  type ConsultationErrors,
  type ConsultationValues,
} from "./consultation-validation";

const initialValues: ConsultationValues = {
  name: "",
  phone: "",
  matter: "",
  message: "",
};

export function ConsultationForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ConsultationErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof ConsultationValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateConsultation(values);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

  return (
    <form className="consultation-form" aria-label="Consultation request" noValidate onSubmit={submit}>
      <p className="form-kicker">Tell us briefly about your matter</p>
      <div className="form-row">
        <label>
          Name
          <input
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <span className="field-error" id="name-error">{errors.name}</span>}
        </label>
        <label>
          Phone
          <input
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Your mobile number"
            value={values.phone}
            onChange={(event) => setField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <span className="field-error" id="phone-error">{errors.phone}</span>}
        </label>
      </div>
      <label>
        Matter type
        <select
          name="matter"
          value={values.matter}
          onChange={(event) => setField("matter", event.target.value)}
          aria-invalid={Boolean(errors.matter)}
          aria-describedby={errors.matter ? "matter-error" : undefined}
        >
          <option value="" disabled>Select a legal matter</option>
          {practiceAreas.map((area) => <option key={area.title} value={area.title}>{area.title}</option>)}
        </select>
        {errors.matter && <span className="field-error" id="matter-error">{errors.matter}</span>}
      </label>
      <label>
        Brief details
        <textarea
          name="message"
          rows={4}
          placeholder="Share only the essential details for this demo"
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
      </label>
      <button className="button button--gold" type="submit">Prepare request <span aria-hidden="true">↗</span></button>
      <small>Demo only — information entered here is not sent or stored.</small>
      <div className="form-status" role="status" aria-live="polite">
        {submitted && "Request prepared. No information was sent or stored. Add the confirmed contact number before using this website publicly."}
      </div>
    </form>
  );
}
