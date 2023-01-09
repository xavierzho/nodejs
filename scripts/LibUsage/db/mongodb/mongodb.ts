// 对mongodb进行封装，默认支持连接池
import { MongoClient } from 'mongodb'
const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri)

export async function insertMany(data: any[], dbname: string, colName: string) {
  await client.connect()
  const col = client.db(dbname).collection(colName)
  const res = await col.insertMany(data)
  console.log(res)
  console.log(res.insertedCount, res.insertedIds)
  await client.close()
}

export async function insertOne(data: any, dbname: string, colName: string) {
  await client.connect()
  const col = client.db(dbname).collection(colName)
  const res = await col.insertOne(data)
  console.log(res.insertedId)
  await client.close()
}
