const addContext = require("mochawesome/addContext");

export const addContextToReport = async function (
  context: Mocha.Context,
  title: string,
  value: any
): Promise<void> {
  await addContext(context, {
    title,
    value,
  });
};
