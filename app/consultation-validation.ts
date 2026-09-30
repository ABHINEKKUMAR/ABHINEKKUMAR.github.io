export type ConsultationValues = {
  name: string;
  phone: string;
  matter: string;
  message: string;
};

export type ConsultationErrors = Partial<Record<keyof ConsultationValues, string>>;

export function validateConsultation(values: ConsultationValues): ConsultationErrors {
  const errors: ConsultationErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number with at least 10 digits.";
  }
  if (!values.matter.trim()) errors.matter = "Please select a matter type.";
  if (!values.message.trim()) errors.message = "Please add a short description.";

  return errors;
}
