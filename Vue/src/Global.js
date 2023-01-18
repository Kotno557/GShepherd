const backend = "http://139.162.39.223/api";
const typeObject = [
  {
    options: [],
    roomId: "",
    name: "",
    category: 1,
  },
  {
    roomId: "",
    name: "",
    category: 2,
  },
  {
    phone: false,
    fullName: false,
    address: false,
    roomId: "",
    name: "",
    category: 3,
  }]
function array_delete(a, index) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (i !== index) {
      b.push(a[i]);
    }
  }
  return b;
}
export default {
  backend,
  typeObject,
  array_delete,
};
