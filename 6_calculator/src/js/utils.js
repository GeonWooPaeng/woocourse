export const findOperation = () => {
  const operations = ["/", "X", "-", "+"];
  const $total = document.querySelector("#total");
  return $total.innerHTML.split("").find((v) => operations.includes(v));
};
