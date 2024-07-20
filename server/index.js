const express = require('express');
const cors = require('cors');
const User = require('./config');

const app = express();
app.use(express.json());
app.use(cors());

// Get all users
app.get("/", async (req, res) => {
try {
  const snapshot = await User.get();
  const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.json(list);
} catch (error) {
  res.status(500).send({ msg: "Failed to fetch users", error: error.message });
}
});

// Create a new user
app.post("/create", async (req, res) => {
const { name, college, age } = req.body;

if (!name || !college || !age) {
  return res.status(400).send({ msg: "Name, College, and Age are required" });
}

const userData = {
  "name": req.body.name,
  "college": req.body.college,
  "age": parseInt(req.body.age, 10),
};

try {
  await User.add(userData);
  res.send({ msg: "User Added" });
} catch (error) {
  res.status(500).send({ msg: "Failed to add user", error: error.message });
}
});

// Update an existing user
app.post("/update", async (req, res) => {
  const id = req.body.id;

  if (!id) {
    return res.status(400).send({ msg: "User ID is required" });
  }
    
  const updatedData = {
      "name": req.body.name,
      "college": req.body.college,
      "age": parseInt(req.body.age, 10),
  };

  try {
    await User.doc(id).update(updatedData);
    res.send({ msg: "Updated" });
  } catch (error) {
    res.status(500).send({ msg: "Failed to update user", error: error.message });
  }
});


// Delete a user
app.post("/delete", async (req, res) => {
const { id } = req.body;

if (!id) {
  return res.status(400).send({ msg: "ID is required" });
}

try {
  await User.doc(id).delete();
  res.send({ msg: "Deleted" });
} catch (error) {
  res.status(500).send({ msg: "Failed to delete user", error: error.message });
}
});

// API test
app.get("/api",(req,res) =>{
  res.json({"users": ["userOne","userTwo", "userThree", "userFour"]})
})

app.listen(4000, () => console.log("Up & Running on port 4000"));
