import mongoose from "mongoose";

const run = async () => {
  try {
    await mongoose.connect("mongodb+srv://final-project:final-project@cluster0.4cu7ada.mongodb.net/final-project");
    console.log("✅ Connected to MongoDB");

    // Make sure this matches your Mongoose model collection name
    const plans = await mongoose.connection.db.collection("businessplans").find().toArray();

    if (plans.length === 0) {
      console.log("📦 No plans found.");
    } else {
      console.log(`📦 ${plans.length} plan(s) found:`);
      plans.forEach((plan, i) => {
        console.log(`\n--- Plan ${i + 1} ---`);
        console.log("Idea:", plan.idea);
        console.log("Sector:", plan.sector);
        console.log("Country:", plan.country);
        console.log("Plan data:", plan.plan);
      });
    }

    await mongoose.disconnect();
    console.log("✅ Disconnected from MongoDB");
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
};

run();
