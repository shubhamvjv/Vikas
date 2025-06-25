const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const horoscopeRoutes = require('./routes/horoscopeRoutes');
const sdkClient = require('./sdk'); // Assuming `sdk.js` is correctly configured
const app = express();
const port = 5000;

// Enable CORS for frontend on localhost:3000
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from your frontend
}));

// Middleware to parse JSON data
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/astrology', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Email schema and model
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});
const Email = mongoose.model('Email', emailSchema);

// Consultation form schema and model
const consultationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  timeOfBirth: String,
  phoneNumber: String,
  email: String,
  description: String,
});
const Consultation = mongoose.model('Consultation', consultationSchema);

// Contact form schema and model
const contactFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});
const ContactForm = mongoose.model('ContactForm', contactFormSchema);

// Endpoint to fetch daily horoscope
app.get('/api/horoscope/:zodiac', (req, res) => {
  const zodiacName = req.params.zodiac;
  const timezone = 5.5; // Default timezone for fetching horoscopes

  const resource = `sun_sign_prediction/daily/${zodiacName}`;

  sdkClient.dailyHoroCall(
    resource,
    zodiacName,
    timezone,
    (error, result) => {
      if (error) {
        console.error('Error fetching horoscope data:', error);
        return res.status(500).json({ error: 'Error fetching horoscope data' });
      }
      if (result && result.prediction) {
        return res.json({ horoscope: result.prediction });
      } else {
        return res.status(404).json({ error: 'Horoscope data not found' });
      }
    }
  );
});

// Endpoint to subscribe to the newsletter
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // Check if email already exists
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: 'Email already subscribed, please enter another Email' });
    }

    // Save the new email
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Error saving subscription:', error);
    res.status(500).json({ message: 'An error occurred while subscribing' });
  }
});

// Endpoint to handle consultation form submission
app.post('/api/submitForm', (req, res) => {
    const { firstName, lastName, dob, timeOfBirth, phoneNumber, email, description } = req.body;
    
    console.log("Received data:", req.body);
    
    // Save the data to your database or perform further actions
    const newConsultation = new Consultation({
        firstName,
        lastName,
        dob,
        timeOfBirth,
        phoneNumber,
        email,
        description,
    });

    newConsultation.save()
        .then(() => {
            res.status(200).json({ message: "Form submitted successfully!" });
        })
        .catch((err) => {
            console.error("Error saving consultation:", err);
            res.status(500).json({ message: "Error saving consultation" });
        });
});

// Endpoint to handle contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log("Contact form data received:", req.body);

  const newContactForm = new ContactForm({
    name,
    email,
    phone,
    message,
  });

  newContactForm.save()
    .then(() => {
      res.status(200).json({ message: 'Contact form submitted successfully!' });
    })
    .catch((err) => {
      console.error('Error saving contact form:', err);
      res.status(500).json({ message: 'Error saving contact form' });
    });
});
app.use('/api/horoscope', horoscopeRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
