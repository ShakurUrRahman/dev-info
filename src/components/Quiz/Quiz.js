import Option from '../Option/Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    // console.log(quiz);
    const showAnswer = () => {
        toast(correctAnswer, {
            position: "top-center"
        });
    }
    return (
        <div>
            <div className="card bg-slate-300 mx-auto w-4/6 shadow-xl m-5">
                <div className="card-body bg-[#61DAFB]">
                    <div className='flex justify-between'>
                        <h2 className="text-xl font-semibold">Quiz: {question}</h2>
                        <EyeIcon onClick={() => showAnswer(correctAnswer)} className="h-6 w-6 text-blue-500" />
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