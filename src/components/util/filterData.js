export const filterData = (data, input) => {
  const types = ["programmingLan", "development", "db"];
  //   , "ai", "math", "etc"
  const filteredData = [];
  for (const type of types) {
    data[type].links.map((data) => {
      if (data.title.toLowerCase().includes(input)) {
        filteredData.push({
          type,
          title: data.title,
          url: `/${type}/${data.title}`,
        });
      }
    });
  }
  return filteredData;
};
