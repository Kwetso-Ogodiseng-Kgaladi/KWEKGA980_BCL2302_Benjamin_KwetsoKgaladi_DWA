const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

names.forEach((name, index) => {
    const province = provinces[index];
    console.log(`${name} (${province})`);
  });

const uppercaseProvinces = provinces.map(province => province.toUpperCase());
const characterCount = names.map(name => name.length);
const sortedProvinces = provinces.sort();
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
const remainingProvincesCount = filteredProvinces.length;
const containsSArray = names.map(name => name.includes('S'));
const provinceObject = containsSArray.reduce((obj, value, index) => {
    obj[names[index]] = value ? provinces[index] : 'No Province';
    return obj;
  }, {});
  
  console.log(uppercaseProvinces,characterCount,sortedProvinces,remainingProvincesCount,containsSArray,provinceObject);