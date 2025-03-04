/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const multer = require("multer");
const {v4: uuidv4} = require("uuid");

// Initialize Firebase Admin
admin.initializeApp();

// Initialize Firestore
const db = admin.firestore();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({storage: storage});

// Initialize Express app
const app = express();
app.use(cors({origin: true}));

// Clients API Endpoints
// GET all clients
app.get("/api/clients", async (req, res) => {
  try {
    const clientsSnapshot = await db.collection("clients").get();
    const clients = [];
    
    clientsSnapshot.forEach((doc) => {
      clients.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    res.status(200).json(clients);
  } catch (error) {
    logger.error("Error fetching clients:", error);
    res.status(500).json({error: "Failed to fetch clients"});
  }
});

// POST - Add a new client
app.post("/api/clients", upload.single("quotationFile"), async (req, res) => {
  try {
    const clientData = req.body;
    
    // Handle file upload if present
    if (req.file) {
      const fileId = uuidv4();
      const fileRef = admin.storage().bucket().file(`quotations/${fileId}`);
      
      await fileRef.save(req.file.buffer, {
        metadata: {
          contentType: req.file.mimetype
        }
      });
      
      // Get public URL
      await fileRef.makePublic();
      const publicUrl = `https://storage.googleapis.com/${admin.storage().bucket().name}/${fileRef.name}`;
      
      clientData.quotationUrl = publicUrl;
    }
    
    // Add timestamps
    clientData.createdAt = admin.firestore.FieldValue.serverTimestamp();
    clientData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
    
    // Initialize payment history if not provided
    if (!clientData.paymentHistory) {
      clientData.paymentHistory = [];
    }
    
    const docRef = await db.collection("clients").add(clientData);
    
    res.status(201).json({
      id: docRef.id,
      ...clientData
    });
  } catch (error) {
    logger.error("Error adding client:", error);
    res.status(500).json({error: "Failed to add client"});
  }
});

// GET a specific client
app.get("/api/clients/:id", async (req, res) => {
  try {
    const docRef = await db.collection("clients").doc(req.params.id).get();
    
    if (!docRef.exists) {
      return res.status(404).json({error: "Client not found"});
    }
    
    res.status(200).json({
      id: docRef.id,
      ...docRef.data()
    });
  } catch (error) {
    logger.error("Error fetching client:", error);
    res.status(500).json({error: "Failed to fetch client"});
  }
});

// PUT - Update a client
app.put("/api/clients/:id", upload.single("quotationFile"), async (req, res) => {
  try {
    const clientData = req.body;
    const clientId = req.params.id;
    
    // Handle file upload if present
    if (req.file) {
      const fileId = uuidv4();
      const fileRef = admin.storage().bucket().file(`quotations/${fileId}`);
      
      await fileRef.save(req.file.buffer, {
        metadata: {
          contentType: req.file.mimetype
        }
      });
      
      // Get public URL
      await fileRef.makePublic();
      const publicUrl = `https://storage.googleapis.com/${admin.storage().bucket().name}/${fileRef.name}`;
      
      clientData.quotationUrl = publicUrl;
    }
    
    // Update timestamp
    clientData.updatedAt = admin.firestore.FieldValue.serverTimestamp();
    
    await db.collection("clients").doc(clientId).update(clientData);
    
    res.status(200).json({
      id: clientId,
      ...clientData
    });
  } catch (error) {
    logger.error("Error updating client:", error);
    res.status(500).json({error: "Failed to update client"});
  }
});

// DELETE a client
app.delete("/api/clients/:id", async (req, res) => {
  try {
    await db.collection("clients").doc(req.params.id).delete();
    res.status(200).json({message: "Client deleted successfully"});
  } catch (error) {
    logger.error("Error deleting client:", error);
    res.status(500).json({error: "Failed to delete client"});
  }
});

// Export the API as a Firebase Function
exports.api = onRequest(app);
