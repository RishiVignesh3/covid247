const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const Hospital = {
  patients: async (parent, args, ctx, info) => {
    const Patient = await prisma.patient.findMany({
      where: {
        hospitalID: parent.id
        } 
      })
      return Patient
  }
};



module.exports = Hospital;
