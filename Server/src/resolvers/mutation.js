const { PrismaClient } = require("@Prisma/client");

const prisma = new PrismaClient();


const Mutation = {
  addUser: async (parent, args, ctx, info) => {
    const email = args.email;

    const itemExists = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    if (itemExists) {
      throw new Error("Email Already Exist");
    }

    const user = {
      username: args.username,
      email: email,
      password: args.password,
    };
    const userData = await prisma.users.create({ data: user });

    return userData;
  },
  changePassword: async (parent, args, ctx, info) => {
    const email = args.email;

    const updateUser = await prisma.users.update({
      where: {
        email: email,
      },
      data: {
        password: args.password,
      },
    });

    return "Updated";
  },
  updateHospital: async (parent, args, ctx, info) => {
    const { id, name, mobileNo, age, gender, bloodGroup, address } = args;
    const hospitalExists = await prisma.hospital.findUnique({
      where: {
        id: +id,
      },
    });
    if (hospitalExists === null) {
      throw new Error("Hospital does not exist");
    }
    const createPatient = await prisma.patient.create({
      data: {
        hospitalID: +id,
        name,
        mobileNo,
        age,
        gender,
        bloodGroup,
        address,
      },
    });
    const updateSeats = await prisma.hospital.update({
      where: {
        id: +id,
      },
      data: {
        seats: {
          decrement: 1,
        },
      },
    });
    return updateSeats;
  },
  Checkout: async (parent, args, ctx, info) => {
    const { id, Name, price } = args;
    const NameExists = await prisma.cart.findMany({
      where: {
        Name,
      },
    });

    if (NameExists.length === 0) {
      const cartData = await prisma.cart.create({ data: { id, Name, price } });

      return cartData.id;
    }

    return 1;
  },

  deleteCartItem: async (parent, args, ctx, info) => {
    const deleteId = args.id;
    const itemExists = await prisma.cart.findUnique({
      where: {
        id: deleteId,
      },
    });
    if (itemExists) {
      const cart = await prisma.cart.delete({
        where: {
          id: deleteId,
        },
      });
      return cart;
    } else {
      throw new Error("User Does Not Exist");
    }
  },
  addAppointment: async (parent, args, ctx, info) => {
    const { doctorid, date, time, id } = args;
    const Appointment = {
      date,
      time,
      doctorid: doctorid,
      id,
    };
    const AppointmentData = await prisma.appointment.create({
      data: Appointment,
    });

    return AppointmentData;
  },
  addPatientInfo: async (parent, args, ctx, info) => {
    const { appointmentID, name, mobileNo, age, gender, bloodGroup, address } =
      args;
    const PatientData = {
      appointmentID: appointmentID,
      name,
      mobileNo: mobileNo,
      age: +age,
      gender,
      bloodGroup,
      address,
    };
    const PatientInfoData = await prisma.patient1.create({
      data: PatientData,
    });
    return PatientInfoData;
  },

};

module.exports = Mutation;
