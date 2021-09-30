import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //criar e relacionar
  /*await prisma.usuario.create({
    data: {
      nome: "Caio2",
      email: "caio2@email.com",
      grupos: {
        connectOrCreate: [
          {
            where: {
              id: 1,
            },
            create: {
              titulo: "Grupo teste",
            },
          },
          {
            where: {
              id: 3,
            },
            create: {
              titulo: "Grupo teste3",
            },
          },
        ],
      },
    },
  });*/
  //deletar todos
  /*await prisma.usuario.deleteMany()
  await prisma.group.deleteMany()*/
  // deletar pelo id
  /*await prisma.usuario.delete({
    where: { id: "user1" },
  });*/
  //update pelo id
  /*await prisma.usuario.update({
    where: { id: "user2" },
    data: { nome: "João" },
  });*/
  
}

main();
