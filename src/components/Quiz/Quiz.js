import Option from '../Option/Option';

const Quiz = ({ quiz }) => {
    const { question, options } = quiz;
    console.log(quiz);


    return (
        <div>
            <div className="card bg-slate-300 mx-auto w-4/6 shadow-xl m-5">
                <div className="card-body bg-[#61DAFB]">
                    <h2 className="text-xl font-semibold p-5">Quiz: {question}</h2>
                    <div className='grid grid-cols-2 gap-2 mt-5'>
                        {
                            options.map(option => <Option
                                option={option}
                            ></Option>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;