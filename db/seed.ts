import { PrismaClient } from "@prisma/client";

import sampleData from "./sample-data";

// Prisma methods that we are going to use are async
async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();

  //   skipDuplicates skips based on unique fields (primary key, indexes)
  await prisma.product.createMany({ data: sampleData.products });

  console.log("Database seeded successfully!");
}

main();