import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.create({
    data: {
      id: "user1",
      nome: "Caio",
      email: "caio@email.com",
    },
  });
}

main();