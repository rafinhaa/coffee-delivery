export const formatMoney = (value: number) => {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
};

export const paymentMapping = {
  card: "cartão de crédito",
  bank: "cartão de débito",
  cash: "dinheiro",
};
