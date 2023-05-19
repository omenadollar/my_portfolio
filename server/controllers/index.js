const mongoose = require('mongoose')
const { News } = require('../models/news')
const MovieDB = require('node-themoviedb');
const mdb = new MovieDB("850a2c9c2710ada6b3acb98d69b966a6");

const indexPage = async(req, res) => {
    try {
        const newsLatest = await News.find({}).sort({ _id: -1 }).limit(5);
        const newsTrending = await News.find({ category: 'Trending' }).limit(7);
        const interNation = await News.find({ category: 'World_news' }).limit(7);
        const national = await News.find({ category: 'Technology' }).limit(7)

        res.render('home', {
            title: 'OMDblog',
            latestData: newsLatest,
            trendingData: newsTrending,
            interNation: interNation,
            national: national
        })
    } catch (error) {
        console.log(error);

    }

}

const movieId = async(req, res) => {
    try {
        const id = req.params.id
        const args = {
            pathParameters: {
                tv_id: id,
                season_number: 1
            },
            query: {
                language: "en-US",
                region: "KR",
                sort_by: "popularity.desc",
                include_video: true,
            },

        };
        //const movie = await mdb.find.byExternalID(197067)
        //const movieResult = movie.data.results
        //console.log(movieResult);

        res.render('movieid')


    } catch (error) {
        console.log(error);
    }
}



const blogpage = async(req, res) => {
    try {
        const newsLatest = await News.find({}).sort({ _id: -1 }).limit(5);

        const newsTrending = await News.find({ category: 'Trending' });

        const interNation = await News.find({ category: 'World_news' });

        const national = await News.find({ category: 'Technology' })

        res.render('blog', {
            title: 'OMD/news',
            trendingData: newsTrending,
            interNation: interNation,
            national: national,
            latestData: newsLatest,

        })


    } catch (error) {

    }
}



const aboutpage = async(req, res) => {
    try {
        const newsLatest = await News.find({}).sort({ _id: -1 }).limit(5);

        res.render('about', {
            title: 'OMD/about',
            latestData: newsLatest,
        })

    } catch (error) {

    }
}


const portfoliopage = async(req, res) => {
    try {
        const newsLatest = await News.find({}).sort({ _id: -1 }).limit(5);

        res.render('portfolio', { latestData: newsLatest })

    } catch (error) {

    }
}


const moviePage = async(req, res) => {
    try {

        const args = {
            pathParameters: {
                // path parameters for query, i.e. tv_id
            },
            query: {
                language: "en-US",
                region: "KR",
                sort_by: "popularity.desc",
                include_adult: false,
                include_video: true,
                page: [1, 2],
                with_original_language: "ko"
            },
            body: {
                // data for request body
            },
        };

        const movie = await mdb.discover.tv(args);

        const newMovie = movie.data.results
            //console.log(newMovie)

        const newsLatest = await News.find({}).sort({ _id: -1 }).limit(5);


        res.render('movies', {
            movies: newMovie,
            latestData: newsLatest,
            title: "OMD/movies"
        })
    } catch (error) {
        console.log("msg" + error);
    }
}

module.exports = {
    indexPage,
    movieId,
    blogpage,
    aboutpage,
    portfoliopage,
    moviePage
}