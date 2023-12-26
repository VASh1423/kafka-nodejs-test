import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9092']
})
const consumer = kafka.consumer({ groupId: 'kafka' })

export const run = async () => {
  await consumer.connect()
  await consumer.subscribe({topic: 'test', fromBeginning: true })
  await consumer.run({
    eachMessage: async ({  message }) => {
      console.log("****************** Arrived in Consumer ******************")
      const obj = JSON.parse(message.value);
      console.log("our object",obj);
  }, })}


