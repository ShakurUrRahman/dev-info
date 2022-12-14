import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';

const Quiz = ({ quiz, index }) => {
    const { question, options, correctAnswer } = quiz;
    console.log(quiz);
    const showAnswer = () => {
        toast(correctAnswer, {
            position: "top-center"
        });
    }
    return (
        <div>
            <div className="card bg-slate-300 lg:mx-auto mx-2 lg:w-4/6 lg:mb-5 mb-2 shadow-xl">
                <div className="card-body bg-[#61DAFB]">
                    <div className='text-center text-xl font-semibold flex justify-center gap-1'>
                        <div>
                            {index + 1}.
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: question }}>
                        </div>
                        <EyeIcon onClick={() => showAnswer(correctAnswer)} className="h-6 w-6 mx-auto mt-2 text-blue-500" />
                    </div>
                    <form className='lg:grid grid-cols-2 lg:gap-2 text-xl p-5'>
                        {
                            options.map(option => <Option
                                key={quiz.id}
                                quiz={quiz}
                                option={option}
                            ></Option>
                            )
                        }
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Quiz;