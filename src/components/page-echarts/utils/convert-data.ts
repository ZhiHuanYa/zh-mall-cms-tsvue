import { coordinateData } from './coordinate-data'

export function convertData(data: any) {
  const res = []
  // for (let i = 0; i < data.length; i++) {
  //   const geoCoord = coordinateData[data[i].name]
  //   if (geoCoord) {
  //     res.push({
  //       name: data[i].name,
  //       value: geoCoord.concat(data[i].value)
  //     })
  //   }
  // }
  for (const item of data) {
    const geoCoord = coordinateData[item.name]
    if (geoCoord) {
      res.push({
        name: item.name,
        value: geoCoord.concat(item.value)
      })
    }
  }
  return res
}
