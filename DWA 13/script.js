const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach((name, index) => {
    const province = provinces[index];
    console.log(`${name} (${province})`);
  });

  const uppercaseProvinces = provinces.map(province => province.toUpperCase());

console.log(uppercaseProvinces);

const characterCount = names.map(name => name.length);

console.log(characterCount);

const sortedProvinces = provinces.sort();

console.log(sortedProvinces);

const filteredProvinces = provinces.filter(province => !province.includes('Cape'));

const remainingProvincesCount = filteredProvinces.length;

console.log(remainingProvincesCount);

const containsSArray = names.map(name => name.includes('S'));

console.log(containsSArray);


const provinceObject = containsSArray.reduce((obj, value, index) => {
    obj[names[index]] = value ? provinces[index] : 'No Province';
    return obj;
  }, {});
  
  console.log(provinceObject);