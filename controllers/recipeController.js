const express = require('express');
const recipes = express.Router();
const { getAllRecipes, getRecipe, createRecipe, deleteRecipe, updateRecipe } = require('../queries/recipes');

recipes.get('/', async (req, res) => {
    const allRecipes = await getAllRecipes();
    if (allRecipes[0]) {
        res.status(200).json({
            success: true,
            payload: allRecipes
        });
    } else {
        res.status(500).json({ error: "server error" });
    }
});

recipes.get("/:id", async (req, res) => {
    const { id } = req.params;
    const recipe = await getRecipe(id);
    if (recipe.id) {
        res.json({
            success: true,
            payload: recipe
        });
    } else {
        res.status(404).json({
            success: false,
            payload: '/not found/'
        });
    }
});

recipes.post("/", async (req, res) => {
    const { body } = req;
    try {
        const createdRecipe = await createRecipe(body)
        if (createdRecipe.id) {
            res.status(200).json({ success: true, payload: createdRecipe })
        } else {
            res.status(422).json({ success: false, payload: "Must include name field" })
        }
    } catch (error) {
        console.log(error)
    }
});

recipes.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedRecipe = await deleteRecipe(id);
    if (deletedRecipe.id) {
        res.status(200).json({
            success: true,
            payload: deletedRecipe
        });
    } else {
        res.status(404).json({
            success: false,
            payload: "Not found"
        });
    }
});

recipes.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedRecipe = await updateRecipe(req.body, id);
    if (updatedRecipe.id) {
        res.status(200).json({
            success: true,
            payload: updatedRecipe
        });
    } else {
        res.status(404).json({ error: "Not found" })
    }
});

module.exports = recipes;