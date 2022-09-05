const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createNewThought,
    editThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createNewThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(editThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;