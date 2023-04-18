const mongoose = require("mongoose");

const BookType = {
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  author: {
    type: [String],
    required: true,
  },
  pages: {
    type: Number,
    required: true,
    min: 0,
  },
  path_to_pdf: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["beginner", "intermediate", "expert"],
    required: true,
  },
  book_edition: {
    type: Number,
    required: true,
    default: 1,
  },
  is_owned: {
    type: Boolean,
    required: true,
    default: false,
  },
  is_finished: {
    type: Boolean,
    required: true,
    default: false,
  },
};

const MultiLinearProgressionType = {
  _id: false,
  name: {
    type: String,
    required: true,
  },
  books: {
    type: [BookType],
    required: true,
  },
};

const LinearProgressionType = {
  _id: false,
  books: {
    type: [BookType],
    required: true,
  },
};

const LearningSchema = new mongoose.Schema({
  learning_type: {
    type: String,
    enum: [
      "physics",
      "chemistry",
      "biology",
      "mathematics",
      "quantum_mechanics",
      "robotics",
      "nanotech",
      "artificial_intelligence",
      "cultural_anthropology",
      "psychology",
      "communication",
      "negotiation",
      "leadership",
      "resource_management",
      "market_analysis",
      "investment_strategies",
      "commerce",
      "financial_management",
      "military_strategy",
      "weapons_and_technology",
      "intelligence_and_counterintelligence",
      "terrain_analysis",
      "propaganda",
      "structural_engineering",
      "mechanical_engineering",
      "agriculture_and_farming",
      "medicine_and_healthcare",
      "crafting_and_artisany",
      "architecture_and_design",
      "astronomy",
      "genetics",
      "botany_and_herbalism",
      "business_and_entrepreneurship",
      "cooking",
      "cryptography_and_information_security",
      "dance_and_performance",
      "ecology_and_environmental_science",
      "education_and_pedagogy",
      "energy_and_power_generation",
      "epidemiology_and_public_health",
      "ethics_and_philosophy",
      "fashion_and_textile_design",
      "geology_and_mineralogy",
      "history_and_archaeology",
      "languages_and_linguistics",
      "law_and_governance",
      "literature_and_writing",
      "media_and_journalism",
      "music_and_sound_design",
      "navigation_and_cartography",
      "religion_and_spirituality",
    ],
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type_of_progression: {
    type: String,
    enum: ["linear", "multi-linear"],
    description:
      "Linear refers to Beginner, Intermediate and Expert Progression." +
      "Multi-linear refers to the material having subfields, ex: physics -> mechanical + quantum + etc..",
    required: true,
  },
  multi_linear_progressions: {
    type: [MultiLinearProgressionType],
    required: true,
    default: [],
  },
  linear_progressions: {
    type: [LinearProgressionType],
    required: true,
    default: [],
  },
});
