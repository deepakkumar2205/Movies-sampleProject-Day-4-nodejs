import { client } from '../index.js';

export async function putMovieById(id, dataOne) {
    return await client.db("MoviesDatabase").collection("movies").updateOne({ id: id }, { $set: dataOne });
}
export async function deleteMovieById(id) {
    return await client.db("MoviesDatabase").collection("movies").deleteOne({ id: id });
}
export async function getAllMovie() {
    return await client.db("MoviesDatabase").collection("movies").find().toArray();
}
export function postMovies(data) {
    return client.db('MoviesDatabase').collection("movies").insertMany(data);
}
export async function getMovieById(id) {
    return await client.db("MoviesDatabase").collection("movies").findOne({ id: id });
}
