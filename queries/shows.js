const db = require("../db/dbConfig");

const getAllShows = async () => {
    try {
        const allShows = await db.any("SELECT * FROM shows");
        return allShows;
    } catch (error) {
        return error;
    }
};

const getAShow = async (id) => {
    try {
        const show = await db.one("SELECT * FROM shows WHERE id=$1", id);
        return show;
    } catch (error) {
        return error;
    }
};

const createShow = async (showToAdd) => {
    try {
        const newShow = await db.one(
            "INSERT INTO shows (title, year, tv_rating, num_episodes, num_seasons, cast, star_rating, genre, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [
                showToAdd.title,
                showToAdd.year,
                showToAdd.tv_rating,
                showToAdd.num_episodes,
                showToAdd.num_seasons,
                showToAdd.cast,
                showToAdd.star_rating,
                showToAdd.genre,
                showToAdd.is_favorite,
            ]
            );
            return newShow;
    } catch (error) {
        return error;
    }
};

const deleteShow = async (id) => {
    try {
        const deletedShow = await db.one("DELETE FROM bookmarks where id=$1 RETURNING *", id);
        return deletedShow;
    } catch (error) {
        return error;
    }
};

const updateShow = async (id, show) => {
    try {
        const updatedShow = await db.one("UPDATE shows SET title=$1, year=$2, tv_rating=$3, num_episodes=$4, num_seasons=$5, cast=$6, star_rating=$7, genre=$8, is_favorite=$9 WHERE id=$10 RETURNING *", [showToAdd.title,
            show.year,
            show.tv_rating,
            show.num_episodes,
            show.num_seasons,
            show.cast,
            show.star_rating,
            show.genre,
            show.is_favorite,
            id
        ]);
        return updatedShow;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllShows,
    getAShow,
    createShow,
    deleteShow,
    updateShow
};