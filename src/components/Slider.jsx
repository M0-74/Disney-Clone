import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
const screenWidth = window.innerWidth;
const Slider = () => {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef();
    useEffect(() => {
        getTrendingMovies();
    }, [])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results)
        })
    }


    const sliderRight = (element) => {
        element.scrollLeft += screenWidth - 110;
    }
    const sliderLeft = (element) => {
        element.scrollLeft -= screenWidth - 110;
    }

    return (
        <div>
            <HiChevronLeft onClick={() => sliderLeft(elementRef.current)} className="text-white text-[30px] absolute mt-[150px] mx-8 cursor-pointer" />
            <HiChevronRight onClick={() => sliderRight(elementRef.current)} className="text-white text-[30px] absolute mt-[150px] mx-8 right-0 cursor-pointer" />

            <div className="flex overflow-x-auto scrollbar-hide scroll-smooth w-full px-16 py-4"
                ref={elementRef}>
                {movieList.map((movie) => (
                    <>
                        <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                            className="min-w-full h-77.5 object-cover object-top-left mr-5 hover:border-[4px] border-gray-400 transition-all duration-100 ease-in" />
                        {/* <h1>{movie.title}</h1> */}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Slider
