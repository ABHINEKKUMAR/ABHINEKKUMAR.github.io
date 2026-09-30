export const profile = {
  name: "Biplab Das",
  title: "Advocate",
  qualification: "LLB",
  location: "Binod Nagar, Dhanbad",
  established: "1968",
  phoneStatus: "awaiting-confirmation",
  whatsappStatus: "awaiting-confirmation",
} as const;

export const officeDetails = {
  address:
    "Binod Nagar More, Near State Bank of India, Chiragora, Binod Nagar, Dhanbad – 826001, Jharkhand",
  openingTime: "7:00 PM",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Binod+Nagar+More+Near+State+Bank+of+India+Chiragora+Binod+Nagar+Dhanbad+826001+Jharkhand",
} as const;

export const practiceAreas = [
  {
    title: "Accident Claims",
    description:
      "Guidance on motor accident compensation, documentation and the legal process after a serious road incident.",
    featured: true,
  },
  {
    title: "Insurance Disputes",
    description:
      "Review of delayed, reduced or disputed motor-insurance claims and the available legal options.",
  },
  {
    title: "Serious Injury & Fatal Claims",
    description:
      "Sensitive legal support for injured people and families dealing with the consequences of an accident.",
  },
  {
    title: "Civil & Consumer Matters",
    description:
      "Assistance with civil disputes and consumer-court matters listed in the advocate’s public profile.",
  },
  {
    title: "Criminal & Family Matters",
    description:
      "Initial consultation for criminal, divorce and family-law concerns.",
  },
  {
    title: "Property & Legal Advisory",
    description:
      "Support for property, cheque-bounce, legal-advisory and High Court matters.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Share what happened",
    description:
      "Bring the incident details and any FIR, medical, vehicle or insurance documents you have.",
  },
  {
    number: "02",
    title: "Understand the next steps",
    description:
      "Receive an initial explanation of the process and the options that may apply to your circumstances.",
  },
  {
    number: "03",
    title: "Choose how to proceed",
    description:
      "Decide whether you would like to discuss formal representation after the initial consultation.",
  },
] as const;

export const faqs = [
  {
    question: "What documents should I bring after a road accident?",
    answer:
      "Bring any FIR or police papers, medical records and bills, photographs, driving and vehicle documents, insurance papers, and details of witnesses. If something is missing, an initial discussion can still help identify the next step.",
  },
  {
    question: "Can an insurance claim be challenged?",
    answer:
      "A delayed, reduced or rejected claim may be reviewed against the policy terms and available evidence. The appropriate route depends on the specific facts and documents.",
  },
  {
    question: "What if the injured person cannot visit the office?",
    answer:
      "A family member can first contact the office to explain the situation and ask what arrangements may be possible.",
  },
  {
    question: "How is the consultation arranged?",
    answer:
      "Use the enquiry form to prepare a consultation request. This demo does not send your information; the confirmed phone or WhatsApp details will be added before publication.",
  },
  {
    question: "Does contacting the office guarantee representation or an outcome?",
    answer:
      "No. A consultation does not create an advocate-client relationship or guarantee representation, compensation or any particular result.",
  },
] as const;
