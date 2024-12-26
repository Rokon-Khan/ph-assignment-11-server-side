const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { config } = require("dotenv");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hwao6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("JobAssesmentDB");
    const addNewAssignmnet = database.collection("assignments");
    const submitionAssignmnet = database.collection("submission");
    const userCollection = database.collection("users");

    // Add New User To Database

    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("creating new user", newUser);
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    });

    // Get Users Form Database

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Add New Assignment to Database
    app.post("/allassignmnets", async (req, res) => {
      const newAssignment = req.body;
      console.log("New Assignment Added", newAssignment);
      const result = await addNewAssignmnet.insertOne(newAssignment);
      res.send(result);
    });

    // Take Assignment
    app.post("/takeassignment", async (req, res) => {
      const newSubmission = req.body;
      console.log("New Assignment Submitted", newSubmission);
      const result = await submitionAssignmnet.insertOne(newSubmission);
      res.send(result);
    });

    // Get Take Assignment

    app.get("/takeassignment", async (req, res) => {
      const cursor = submitionAssignmnet.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Get takeassignment by daynmic ID
    app.get("/takeassignment/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const assignment = await submitionAssignmnet.findOne({
          _id: new ObjectId(id),
        });
        if (!assignment) {
          return res.status(404).send({ message: "Assignment not found" });
        }
        res.send(assignment);
      } catch (error) {
        console.error("Error fetching assignment:", error);
        res.status(500).send({ message: "Error fetching assignment" });
      }
    });

    // The Patch Method of the code
    app.patch("/takeassignment/:id", async (req, res) => {
      const { id } = req.params;
      const updatedData = req.body;

      try {
        const result = await submitionAssignmnet.updateOne(
          { _id: new ObjectId(id) },
          { $set: updatedData }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Assignment not found" });
        }

        res.status(200).json({ message: "Assignment updated successfully" });
      } catch (error) {
        console.error("Error updating assignment:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    // Delete Assignment
    app.delete("/allassignmnets/:id", async (req, res) => {
      const id = req.params.id;
      console.log("Delete Campaign from Database", id);
      const query = { _id: new ObjectId(id) };
      const result = await addNewAssignmnet.deleteOne(query);
      res.send(result);
    });
    // Update  Assignment Data

    app.put("/allassignmnets/:id", async (req, res) => {
      const id = req.params.id;

      const product = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateProduct = {
        $set: product,
      };
      const result = await addNewAssignmnet.updateOne(
        filter,
        updateProduct,
        options
      );
      res.send(result);
    });
    // Get All Assignments

    app.get("/allassignmnets", async (req, res) => {
      const cursor = addNewAssignmnet.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // Single assignment of ID
    app.get("/allassignmnets/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await addNewAssignmnet.findOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Fund Raiser Crud Server is Running on Port: ${port}`);
});
