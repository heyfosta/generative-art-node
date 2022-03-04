const layersOrder = [
  { name: "background", number: 5 },
  { name: "guns", number: 5 },
  { name: "face", number: 1 },
  { name: "mouth", number: 5 },
  { name: "arms", number: 2 },
  { name: "eyes", number: 5 },
  { name: "accesories", number: 6 },
  { name: "eyebrows", number: 6 },
];
  
const format = {
    width: 250,
    height: 250
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 100;

module.exports = { layersOrder, format, rarity, defaultEdition };