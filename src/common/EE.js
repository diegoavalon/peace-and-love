let whoisit = "Vue2";

const EE = new EventEmitter3();

const setTag = (detail) => {
  whoisit = detail;
  console.log(whoisit);
};
EE.on("tag", setTag);

export default EE;
