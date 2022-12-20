const db = require("../db/dbConfig.js");

const getAllRecipes = async () => {
    try {
        const allRecipes = await db.any("SELECT * FROM recipes");
        return allRecipes;
    } catch (error) {
        return error;
    }
};

const getRecipe = async (id) => {
    try {
        const oneRecipe = await db.one('SELECT * FROM recipes WHERE id=$1', id);
        return oneRecipe;
    } catch (error) {
        return error;
    }
};

const createRecipe = async (recipe) => {
    const { name, cal, fat, carb, protein, photos, ingredients, instructions } = recipe;
    try {
        const newRecipe = await db.one(
            "INSERT INTO recipes (name, cal, fat, carb, protein, photos, ingredients, instructions ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [name, cal, fat, carb, protein, photos, ingredients, instructions]
        );
        return newRecipe;
    } catch (error) {
        return error;
    }
};

const deleteRecipe = async (id) => {
    try {
        const deletedRecipe = await db.one("DELETE FROM recipes WHERE id = $1 RETURNING *", id);
        return deletedRecipe;
    } catch (error) {
        return error;
    }
};

const updateRecipe = async (recipe, id) => {
    const { name, cal, fat, carb, protein, photos, ingredients, instructions } = recipe;
    try {
        const updatedRecipe = await db.one("UPDATE recipes SET name=$1, cal=$2, fat=$3, carb=$4, protein=$5, photos=$6, ingredients=$7, instructions=$8 WHERE id=$9 RETURNING *",
            [recipe.name, recipe.cal, recipe.fat, recipe.carb, recipe.protein, recipe.photos, recipe.ingredients, recipe.instructions, id]);
        return updatedRecipe;
    } catch (error) {
        return error;
    }
}
module.exports = {
    getAllRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
};