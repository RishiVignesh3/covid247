const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const Patient = {
  hospital: async (parent, args, ctx, info) => {
    const Hospital = await prisma.hospital.findUnique({
      where: {
        id: parent.hospitalID
        } 
      })
      return Hospital
  }
};

module.exports = Patient;
