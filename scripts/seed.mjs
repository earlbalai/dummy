// const { PrismaClient } = require('@prisma/client')
// const faker = require('faker')

import { PrismaClient } from "@prisma/client"
import { faker } from "@faker-js/faker"

const prismadb = new PrismaClient()

async function createRandomPost() {
  return await prismadb.post.create({
    data: {
      title: faker.lorem.sentence(),
      post: faker.lorem.paragraphs(),
      url: faker.internet.url(),
      imageUrl: faker.image.imageUrl(),
    },
  })
}

async function main() {
  for (let i = 0; i < 5; i++) {
    await createRandomPost()
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prismadb.$disconnect()
  })
