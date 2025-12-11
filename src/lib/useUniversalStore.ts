import universalData from "@/data/universal.json";

export const useUniversalData = () => {
  const contact = universalData?.site?.contact;

  // Mirror contact values into top-level site fields when provided
  const data = contact
    ? {
        ...universalData,
        site: {
          ...universalData.site,
          phone: contact.phone || universalData.site?.phone,
          whatsapp: contact.whatsapp || universalData.site?.whatsapp,
          email: contact.email || universalData.site?.email,
          address: contact.address || universalData.site?.address,
          contact,
        },
      }
    : universalData;

  return { data };
};
