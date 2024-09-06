export const renderTemplate = (
  template: string,
  model: Record<string, string | number>,
) => {
  Object.entries(model).forEach(([key, value]) => {
    template = template.replaceAll(`{{${key}}}`, String(value));
  });
  return template;
};
