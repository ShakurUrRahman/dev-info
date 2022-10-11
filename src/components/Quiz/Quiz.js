import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    console.log(quiz);
    const showAnswer = () => {
        toast(correctAnswer, {
            position: "top-center"
        });
    }
    return (
        <div>
            <div className="card bg-slate-300 lg:mx-auto mx-2 lg:w-4/6 shadow-xl lg:mb-5 mb-2">
                <div className="card-body bg-[#61DAFB]">
                    <div className='text-center'>
                        <h2 className="text-xl font-semibold">Quiz: {question}</h2>
                        <EyeIcon onClick={() => showAnswer(correctAnswer)} className="h-6 w-6 mx-auto mt-2 text-blue-500" />
                        <ToastContainer></ToastContainer>
                    </div>
                    <form className='lg:grid grid-cols-2 lg:gap-2 text-xl p-5'>
                        {
                            options.map(option => <Option
                                key={option}
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