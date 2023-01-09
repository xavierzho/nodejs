import { writeFile, readFile } from 'fs'
import { readJSON, writeJSON } from 'fs-extra'
import { resolve } from 'path'
const data =
  "/prefetch:# arguments to use when launching various process types. It has been observed that when file reads are consistent for 3 process launches with the same /prefetch:# argument, the Windows prefetcher starts issuing reads in batch at process launch. Because reads depend on the process type, the prefetcher wouldn't be able to observe consistent reads if no /prefetch:# arguments were used. Note that the browser process has no /prefetch:# argument; as such all other processes must have one in order to avoid polluting its profile. Note: # must always be in [1, 8]; otherwise it is ignored by the Windows prefetcher. ↪"

writeFile(resolve(__dirname, 'file.txt'), data, (err) => {
  if (err) throw err
  console.log('write file')
})

readFile(resolve(__dirname, 'file.txt'), (err, data) => {
  if (err) throw err
  console.log('read file', data.toString())
})

readJSON(resolve(__dirname, '../package.json')).then((data) => {
  console.log('read json', data)
})

writeJSON(resolve(__dirname, 'file.json'), { name: 'test', data }).then(() => {
  console.log('write json')
})
