const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

app.use(cors());

app.options('https://localhost:7209/api/FeeStatus/signup', cors());

app.use(express.json());

// Connect to the SQL database
const sequelize = new Sequelize('stu_database', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define a Student model
const Student = sequelize.define('Student', {
  enrollmentNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  feeStatus: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Pending',
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// Define the route for '/api/FeeStatus/students' endpoint
app.route('/api/FeeStatus/students')
  .get((req, res) => {
    // Fetch the students' data from the database
    Student.findAll()
      .then((students) => {
        // Send the students' data as the response
        res.json(students);
      })
      .catch((error) => {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Error fetching students' });
      });
  })
  .post((req, res) => {
    // Create a new student in the database
    const { enrollmentNo, fullName, email, mobile, year, paymentMode, Amount } = req.body;
    Student.create({ enrollmentNo, fullName, email, mobile, year, paymentMode, Amount })
      .then((student) => {
        res.status(201).json(student);
      })
      .catch((error) => {
        console.error('Error creating student:', error);
        res.status(500).json({ error: 'Error creating student' });
      });
  });

// Other routes and endpoints...

// Synchronize the models with the database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

// Start the server
app.listen(7209, () => {
  console.log('Server is running on port 7209');
});
