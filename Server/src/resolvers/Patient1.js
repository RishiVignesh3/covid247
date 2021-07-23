const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const Patient1 = {
  appointment: async (parent, args, ctx, info) => {
    const Appointment = await prisma.appointment.findUnique({
      where: {
        id: +parent.appointmentID,
      },
    });
    return Appointment;
  },
};
module.exports = Patient1;
