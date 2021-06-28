const { PrismaClient } = require("@Prisma/client");

const prisma = new PrismaClient();

const Mutation = {
 
};

module.exports = Mutation;

// const { PrismaClient } = require("@Prisma/client");
// const prisma = new PrismaClient();
// const Mutation = {
// createUser: async (parent, args, ctx, info) => {
// console.log(args)
// const dataSet = args.data;
// const emailExists = await prisma.user.findMany({
// where: {
// email: dataSet.email,
//  },
//  });
// if (emailExists.length === 0) {
// const user = await prisma.user.create({ data: args.data });
// console.log(user);
// return user;
//  } else {
// throw new Error("User Already Exists");
//  }
//  },
// deleteUser: async (parent, args, ctx, info) => {
// console.log(args)
// const deleteId = +args.id;
// const userExists = await prisma.user.findUnique({
// where: {
// id: deleteId,
//  },
//  });
// if (userExists) {
// const user = await prisma.user.delete({ where: {
// id: deleteId,
//  } });
// console.log(user);
// return user;
//  } else {
// throw new Error("User Does Not Exist");
//  }
//  }
// };
// module.exports = Mutation;