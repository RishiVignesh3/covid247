const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const Query = {
  loginCheck: async (parent, args, ctx, info) => {
    const email = args.email;
    const password = args.password;
    const itemExists = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (
      itemExists &&
      itemExists.email === email &&
      itemExists.password === password
    ) {
      return "ok";
    } else if (itemExists && itemExists.password !== password) {
      return "Invalid Password";
    } else {
      return "User Not Found";
    }
  },
  hospital: async (parent, args, ctx, info) => {
    const hospital = args.id
      ? await prisma.hospital.findMany({
          where: {
            id: +args.id,
          },
        })
      : prisma.hospital.findMany();
    return hospital;
  },
  patients: async (parent, args, ctx, info) => {
    const hospital = args.id
      ? await prisma.patient.findMany({
          where: {
            id: +args.id,
          },
        })
      : prisma.patient.findMany();
    return hospital;
  },
  Medicine: async (parent, args, ctx, info) => {
    const MedicineStore = args.id
      ? await prisma.medicine.findUnique({
          where: {
            id: args.id,
          },
        })
      : prisma.medicine.findMany();
    return MedicineStore;
  },
  carts: async (parent, args, ctx, info) => {
    const CartStore = args.id
      ? await prisma.cart.findMany({
          where: {
            id: args.id,
          },
        })
      : prisma.cart.findMany();
    return CartStore;
  },
  doctorProfile: async (parent, args, ctx, info) => {
    const doctorprofile = args.id
      ? await prisma.doctorProfile.findMany({
          where: {
            id: +args.id,
          },
        })
      : prisma.doctorProfile.findMany();
    return doctorprofile;
  },
};

module.exports = Query;
