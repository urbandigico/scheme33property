export const site = {
  name: "Scheme 33 Property",
  attribution: "Powered by MFK Builders and Developers",
  url: "https://scheme33property.com",
  phone: "+92 324 8293910",
  tel: "+923248293910",
  whatsapp: "923248293910",
  address: "Main Maymar Avenue Road, Scheme 33, Karachi",
};
export function whatsappLink(
  message = "Hello! I would like to know more about your Scheme 33 projects.",
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
