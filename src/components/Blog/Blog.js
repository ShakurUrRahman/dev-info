import React from 'react';

const Blog = () => {
    return (

        <div>
            <h1 className='lg:text-5xl text-3xl mx-2 font-bold  text-[#4568ea] lg:mt-16 mt-5 text-center'>Here is the questions and answers session!!!</h1>
            <div className='lg:m-10 m-2'>
                <div className='border rounded-md m-5'>
                    <h1 className='bg-[#61DAFB] text-xl font-semibold p-10'>What is the purpose of react router?</h1>
                    <h1 className='bg-[#F7E018] text-xl p-10'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h1>
                </div>
                <div className='border rounded-md m-5'>
                    <h1 className='bg-[#61DAFB] text-xl font-semibold p-10'>How does context API works?</h1>
                    <h1 className='bg-[#F7E018] text-xl p-10'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h1>
                </div>
                <div className='border rounded-md m-5'>
                    <h1 className='bg-[#61DAFB] text-xl font-semibold p-10'>What is useRef?</h1>
                    <h1 className='bg-[#F7E018] text-xl p-10'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.</h1>
                </div>
            </div>
        </div>
    );
};

export default Blog;