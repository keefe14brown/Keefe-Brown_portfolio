const mongoose = require('mongoose');
const React = require('react');

const projectSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    technologies: { type: String, required: true},
    description:  { type: String, required: true },
    img: { type: String, required: true }
});

module.exports = mongoose.model('Project', projectSchema);

