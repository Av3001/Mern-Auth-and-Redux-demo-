import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://test:test@cluster0.gverq1o.mongodb.net/?retryWrites=true&w=majority');
    console.log(`MongoDB Connected to : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;