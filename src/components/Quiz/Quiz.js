import Option from '../Option/Option';

const Quiz = ({ quiz }) => {
    const { question, options } = quiz;
    console.log(quiz);


    return (
        <div className="card mx-auto w-4/6 bg-base-100 shadow-xl m-5">
            <div className="card-body">
                <h2 className="text-2xl font-semibold text-center">Quiz: {question}</h2>

                <div className='flex gap-3'>
                    {
                        options.map(option => <Option
                            option={option}
                        ></Option>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;