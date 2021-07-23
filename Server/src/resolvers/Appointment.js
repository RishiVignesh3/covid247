const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Appointment = {
  patient: async (parent, args, ctx, info) => {
    const Patient = await prisma.patient1.findUnique({
      where: {
        appointmentID: parent.id,
      },
    });
    return Patient;
  },
  doctorProfile: async (parent, args, ctx, info) => {
    const DoctorProfile = await prisma.doctorProfile.findMany({
      where: {
        id: parent.doctorid,
      },
    });
    return DoctorProfile;
  },
};
module.exports = Appointment;
